package com.ecom.controller;

import com.ecom.configuration.JwtRequestFilter;
import com.ecom.dao.CommentDao;
import com.ecom.dao.ProfileDao;
import com.ecom.dao.UserDao;
import com.ecom.entity.Comment;
import com.ecom.entity.Profile;
import com.ecom.entity.Reservation;
import com.ecom.entity.User;
import com.ecom.service.CommentService;
import com.ecom.service.ProfileService;
import com.ecom.service.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.persistence.criteria.CriteriaBuilder;
import javax.validation.Valid;
import java.util.List;

@RestController

public class CommentController {

    @Autowired
    private CommentDao repository;

    @Autowired
    private CommentService commentService ;


    @Autowired
    private UserDao userDao;

    // get all employees
    @GetMapping("/comment")
    public List<Comment> getAllComment(){
        return repository.findAll();
    }



        @PreAuthorize("hasRole('User')")

        @GetMapping({"/getCommentUser"})
        public List<Comment> getOrderDetails() {
            return commentService.listCommentUser();
        }

        /*

        @PreAuthorize("hasRole('User')")

        @PostMapping("/comment")
        public Comment  createComment(@Valid @RequestBody Comment c) {


            String currentUser = JwtRequestFilter.CURRENT_USER;
            User user= userDao.findById(currentUser).get();
            c.setU(user);
            return repository.save(c);
        }

    */
        @PreAuthorize("hasRole('User')")

        @PostMapping("/comment")
    public ResponseEntity<?> createComment(@Valid @RequestBody Comment c) {
        String currentUser = JwtRequestFilter.CURRENT_USER;
        User user = userDao.findById(currentUser).orElse(null);

        // Check if the user has already submitted a comment
        if (user != null && commentService.hasUserCommented(user)) {
            return ResponseEntity.badRequest().body("User has already submitted a comment");
        }

        // Proceed to create a new comment
        if (user != null) {
            c.setU(user);
            Comment createdComment = repository.save(c);
            return ResponseEntity.ok(createdComment);
        } else {
            return ResponseEntity.badRequest().body("User not found");
        }
    }





    @GetMapping("/comment/{id}")
    public ResponseEntity<Comment> getById(@PathVariable Integer id) throws ResourceNotFoundException {
         Comment employee = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
        return ResponseEntity.ok(employee);
    }


    @PreAuthorize("hasRole('User')")
    @PutMapping("/comment/{id}")
    public ResponseEntity<Comment> update(@PathVariable  Integer id,
                                          @RequestBody Comment p) throws ResourceNotFoundException {
       Comment comment = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("" + id));

        comment.setComment(p.getComment());
        comment.setDate(p.getDate());
        comment.setTime(p.getTime());
        comment.setRate(p.getRate());


        Comment updateProfile = repository.save(comment);
        return ResponseEntity.ok(updateProfile);
    }




    @DeleteMapping({"/deleteComment/{commentId}"})
    public void deleteBlogtDetailes(@PathVariable("commentId") Integer commentId) {
        commentService.deleteComment(commentId);
    }





}
