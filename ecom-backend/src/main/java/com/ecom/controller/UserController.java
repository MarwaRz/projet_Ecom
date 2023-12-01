package com.ecom.controller;

import com.ecom.configuration.JwtRequestFilter;
import com.ecom.dao.RoleDao;
import com.ecom.dao.UserDao;
import com.ecom.entity.*;
import com.ecom.service.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.ecom.service.UserService;

import javax.annotation.PostConstruct;
import java.util.List;

@RestController
public class UserController {
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private UserService userService;
    @Autowired
    private RoleDao roleDao;
    @Autowired
    private UserDao userDao;
    @PostConstruct
    public void initRoleAndUser() {
        userService.initRoleAndUser();
    }

    @PostMapping({"/registerNewUser"})
    public User registerNewUser(@RequestBody User user) {
        return userService.registerNewUser(user);
    }

    @GetMapping({"/forAdmin"})
    @PreAuthorize("hasRole('Admin')")
    public String forAdmin(){
        return "This URL is only accessible to the admin";
    }






    @PreAuthorize("hasRole('Admin')")
    @DeleteMapping({"/delete/{userName}"})
    public void delete(@PathVariable("userName") String userName) {
        userService.delete(userName);
    }
    /*
    @PreAuthorize("hasRole('Admin')")
    @DeleteMapping({"/delete/{userName}"})
    public void deleteUser(@PathVariable("userName") String userName) {
        User user = userDao.findByUserName(userName);
        if (user != null) {
            roleDao.deleteByUser(user);
        }

        // Now you can safely delete the user
        userDao.deleteByUserName(userName);    }


*/










    @PreAuthorize("hasRole('Admin')")

    @GetMapping({"/listUser"})
    public List<User> getAllUser(@RequestParam(defaultValue = "0") int pageNumber
            , @RequestParam(defaultValue = "") String searchKey){
        return userService.getAllUser(pageNumber, searchKey);
    }

    @GetMapping({"/forUser"})
    @PreAuthorize("hasRole('User')")
    public String forUser(){
        return "This URL is only accessible to the user";
    }


    @PreAuthorize("hasRole('Admin')")

    @PostMapping({"/addUser"})
    public User addUser(@RequestBody User user) {
        return userService.addNewUser(user);

    }

    @PreAuthorize("hasRole('Admin')")

    @GetMapping("/listUserr")
    public List<User> getAllUser(@RequestParam(defaultValue = "0") int pageNumber,
                                 @RequestParam(defaultValue = "") String searchKey,
                                 @RequestParam Role roleName) {
        return userService.getAllUserr(pageNumber, searchKey, roleName);
    }




    @GetMapping({"/getAllUtilisateur"})
    public List<User> getAlluser() {
        return userService.getAllUtilisateur();
    }





    @GetMapping("/usernom/{username}")
    public ResponseEntity<User> getById(@PathVariable String username) throws ResourceNotFoundException {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentUsername = authentication.getName();

        if (!currentUsername.equals(username)) {
            throw new AccessDeniedException("You are not authorized to view this user's information");
        }

        User user = userDao.findById(username)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with username: " + username));

        return ResponseEntity.ok(user);
    }

    //@GetMapping("/usernom/{username}")
   // public ResponseEntity<User> getById(@PathVariable String username) throws ResourceNotFoundException {

    //    User employee = userDao.findById(username)
             //   .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + username));
     //   return ResponseEntity.ok(employee);
  //  }





    @PreAuthorize("hasAnyRole('Admin', 'User','Employe')")

    @PutMapping("/usernomn/{username}")
    public ResponseEntity<User> updatbe(@PathVariable String username, @RequestBody User u)
            throws ResourceNotFoundException {


        User user = userDao.findById(username)
                .orElseThrow(() -> new ResourceNotFoundException("" + username));

        // Update user information
       // user.setUserPassword(passwordEncoder.encode(u.getUserPassword()));
        user.setUserLastName(u.getUserLastName());
        user.setUserFirstName(u.getUserFirstName());
        user.setUserName(u.getUserName());
        user.setUserEmail(u.getUserEmail());

        // Save the updated user
        User updateProfile = userDao.save(user);
        return ResponseEntity.ok(updateProfile);
    }

    // Add the password encoding logic if not already present
    private String getEncodedPassword(String plainPassword) {
        return passwordEncoder.encode(plainPassword);
    }


    @GetMapping("/current")
    public User getCurrentUser() {
        return userService.getUserConnecter();
    }






    @PreAuthorize("#username == authentication.principal.username or hasAnyRole('Admin','User' ,'Employe')")
    @PutMapping("/usernom/{username}")
    public ResponseEntity<User> update(@PathVariable String username, @RequestBody User u)
            throws ResourceNotFoundException {

        // Check if the authenticated user has the authority to update this account
        if (!username.equals(SecurityContextHolder.getContext().getAuthentication().getName())
                && !SecurityContextHolder.getContext().getAuthentication().getAuthorities().stream()
                .anyMatch(role -> role.getAuthority().equals("Admin") || role.getAuthority().equals("Employe"))) {
            throw new AccessDeniedException("You do not have permission to update this account");
        }

        User user = userDao.findById(username)
                .orElseThrow(() -> new ResourceNotFoundException("" + username));

        // Update user information
        //   user.setUserPassword(passwordEncoder.encode(u.getUserPassword()));
        user.setUserLastName(u.getUserLastName());
        user.setUserFirstName(u.getUserFirstName());
        user.setUserName(u.getUserName());
        user.setUserEmail(u.getUserEmail());

        // Save the updated user
        User updateProfile = userDao.save(user);
        return ResponseEntity.ok(updateProfile);
    }





    @PreAuthorize("#username == authentication.principal.username or hasAnyRole('Admin','User', 'Employe')")
    @PutMapping("/password/{username}")
    public ResponseEntity<User> updatePassword(@PathVariable String username, @RequestBody User u)
            throws ResourceNotFoundException {

        // Check if the authenticated user has the authority to update this account
        if (!username.equals(SecurityContextHolder.getContext().getAuthentication().getName())
                && !SecurityContextHolder.getContext().getAuthentication().getAuthorities().stream()
                .anyMatch(role -> role.getAuthority().equals("Admin") || role.getAuthority().equals("Employe"))) {
            throw new AccessDeniedException("You do not have permission to update this account");
        }

        User user = userDao.findById(username)
                .orElseThrow(() -> new ResourceNotFoundException("" + username));

        // Update user information
           user.setUserPassword(passwordEncoder.encode(u.getUserPassword()));


        // Save the updated user
        User updateProfile = userDao.save(user);
        return ResponseEntity.ok(updateProfile);
    }




}
