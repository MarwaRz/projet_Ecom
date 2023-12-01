package com.ecom.dao;
import com.ecom.entity.Comment;
import com.ecom.entity.Profile;
import com.ecom.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface CommentDao extends JpaRepository<Comment, Integer>{

    public List<Comment> getByU(User u);
    boolean existsByU(User user);


}
