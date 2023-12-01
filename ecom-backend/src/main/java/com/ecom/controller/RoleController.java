package com.ecom.controller;

import com.ecom.dao.RoleDao;
import com.ecom.entity.Profile;
import com.ecom.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.entity.Role;
import com.ecom.service.RoleService;

import javax.validation.Valid;
import java.util.List;

@RestController
public class RoleController {

    @Autowired
    private RoleService roleService;

    @Autowired
    private RoleDao e;

    @PostMapping({"/createNewRole"})
    public Role createNewRole(@RequestBody Role role) {
        return roleService.createNewRole(role);
    }



    @GetMapping({"/getAllrole"})
    public List<Role> getAllRoles() {
        return roleService.getAllRole();
    }


    @GetMapping({"/getAllrole{roleName}"})
    public List<User> getAllUserByRole(String role) {
        return roleService.getUserByRole(role);
    }


}



