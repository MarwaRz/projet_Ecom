package com.ecom.service;

import com.ecom.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.ecom.dao.RoleDao;
import com.ecom.entity.Role;

import java.util.ArrayList;
import java.util.List;

@Service
public class RoleService {

    @Autowired
    private RoleDao roleDao;

    public Role createNewRole(Role role) {
        return roleDao.save(role);
    }



    public List<Role> getAllRole(){
        List<Role> r = new ArrayList<>();
        roleDao.findAll().forEach(e -> r.add(e));

        return r;
    }




    public List<User> getUserByRole(
       String roleName){

                return (List<User>) roleDao.findByRoleName(roleName);

    }
}
