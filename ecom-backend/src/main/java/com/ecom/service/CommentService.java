package com.ecom.service;

import com.ecom.configuration.JwtRequestFilter;
import com.ecom.dao.CommentDao;
import com.ecom.dao.UserDao;
import com.ecom.entity.Comment;
import com.ecom.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {


    @Autowired
    private CommentDao commentdao ;
    @Autowired
    private UserDao userDao ;


    public List<Comment>  listCommentUser(){
        String currentUser = JwtRequestFilter.CURRENT_USER;
        User user = userDao.findById(currentUser).get();
        return  commentdao.getByU(user);
    }
    public void deleteComment(Integer commentId) {
        commentdao.deleteById(commentId);
    }
    public boolean hasUserCommented(User user) {
        // Assuming there is a method in CommentDao to check if the user has commented
        return commentdao.existsByU(user);
    }

}
