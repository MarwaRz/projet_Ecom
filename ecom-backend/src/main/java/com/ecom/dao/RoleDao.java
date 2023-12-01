package com.ecom.dao;

import com.ecom.entity.User;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ecom.entity.Role;

import java.util.List;

@Repository
public interface RoleDao extends CrudRepository<Role, String> {
    public List<User> findByRoleName(String role);


    /* void deleteByUser(User user);*/

}
