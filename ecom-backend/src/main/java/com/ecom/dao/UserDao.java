package com.ecom.dao;

import com.ecom.entity.Role;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ecom.entity.User;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserDao extends CrudRepository<User, String> {
    public List<User> findAll(Pageable pageable);
    public User findByUserName(String username);

    public List<User>  findByUserNameContainingIgnoreCase(
            String key1,   Pageable pageable);

    public   List<User> findByRole(Role role);

    void deleteByUserName(String userName);


}
