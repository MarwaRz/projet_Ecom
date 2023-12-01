package com.ecom.service;

import com.ecom.configuration.JwtRequestFilter;
import com.ecom.entity.Comment;
import com.ecom.entity.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ecom.dao.RoleDao;
import com.ecom.dao.UserDao;
import com.ecom.entity.Role;
import com.ecom.entity.User;

import java.util.*;

@Service
public class UserService {

    @Autowired
    private UserDao userDao;

    @Autowired
    private RoleDao roleDao;


    @Autowired
    private UserDao userRepository;

    @Autowired
    private RoleDao userRoleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void initRoleAndUser() {

        Role adminRole = new Role();
        adminRole.setRoleName("Admin");
        adminRole.setRoleDescription("Admin role");
        roleDao.save(adminRole);

        Role userRole = new Role();
        userRole.setRoleName("User");
        userRole.setRoleDescription("Default role for newly created record");
        roleDao.save(userRole);

        Role employeeRole = new Role();
        employeeRole.setRoleName("Employe");
        employeeRole.setRoleDescription("new");
        roleDao.save(employeeRole);

        User adminUser = new User();
        adminUser.setUserName("Nidhalessid");
        adminUser.setUserPassword(getEncodedPassword("Nidhal120499"));
        adminUser.setUserFirstName("+34605659239");
        adminUser.setUserLastName("adress");
        adminUser.setUserEmail("Nidhal.essid99@gmail.com");

        Set<Role> adminRoles = new HashSet<>();
        adminRoles.add(adminRole);
        adminUser.setRole(adminRoles);
        userDao.save(adminUser);



    }
    public User registerNewUser(User user) {
        Role role = roleDao.findById("User").get();
        Set<Role> userRoles = new HashSet<>();
        userRoles.add(role);
        user.setRole(userRoles);
        user.setUserPassword(getEncodedPassword(user.getUserPassword()));

        return userDao.save(user);
    }
    public List<User> getAllUser(int pageNumber, String searchKey){
        Pageable pageable = PageRequest.of(pageNumber, 8);

        if(searchKey.equals("")) {
            return (List<User>) userDao.findAll(pageable);
        }else {
            return (List<User>)userDao.findByUserNameContainingIgnoreCase(searchKey, pageable);
        }
    }
    public User addNewUser(User user) {
        Role role = roleDao.findById("Employe").get();
        Set<Role> employeeRole = new HashSet<>();
        employeeRole.add(role);
        user.setRole(employeeRole);
        user.setUserPassword(getEncodedPassword(user.getUserPassword()));

        return userDao.save(user);
    }

    public String getEncodedPassword(String password) {
        return passwordEncoder.encode(password);
    }


    public List<User> getAllUserr(int pageNumber, String searchKey , Role role){
        Pageable pageable = PageRequest.of(pageNumber, 8);

        if(searchKey.equals("")) {
            return (List<User>) userDao.findByRole(role);
        }else {
            return (List<User>)userDao.findByUserNameContainingIgnoreCase(searchKey, pageable);
        }
    }




    public List<User> getAllUtilisateur(){
        List<User> orderDetails = new ArrayList<>();
        userDao.findAll().forEach(e -> orderDetails.add(e));

        return orderDetails;
    }



    public void delete(String userName) {
        userDao.deleteById(userName);
    }



    public User getUserDetailsById(String userName) {

        return userDao.findById(userName).get();
    }



    public User getUserConnecter() {
        String currentUser = JwtRequestFilter.CURRENT_USER;

        // Remplacez le type de retour de findById par le type réel de votre entité User
        Optional<User> userOptional = userDao.findById(currentUser);

        // Vérifiez si l'utilisateur est présent dans la base de données
        if (userOptional.isPresent()) {
            return userOptional.get();
        } else {
            // Gérez le cas où l'utilisateur n'est pas trouvé (par exemple, lancez une exception ou renvoyez null)
            throw new RuntimeException("Utilisateur non trouvé pour l'ID : " + currentUser);
        }
    }






}
