package com.ecom.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.ecom.dao.*;
import com.ecom.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.ecom.configuration.JwtRequestFilter;

@Service
public class Blog2Service {

    @Autowired
    private Blog2Dao blogDao;
    @Autowired
    private UserDao userDao;


    public Blog2 addNewBlog(Blog2 blog) {
        return blogDao.save(blog);
    }

    public List<Blog2> getAllBlog(int pageNumber, String searchKey){
        Pageable pageable = PageRequest.of(pageNumber, 8);

        if(searchKey.equals("")) {
            return (List<Blog2>) blogDao.findAll(pageable);
        }else {
            return (List<Blog2>)blogDao.findByBlog2NameContainingIgnoreCaseOrBlog2DescriptionContainingIgnoreCase(searchKey, searchKey, pageable);
        }

    }

    public void deleteBlog(Integer blog2Id) {
        blogDao.deleteById(blog2Id);
    }

    public Blog2 getBlogDetailsById(Integer blog2Id) {

        return blogDao.findById(blog2Id).get();
    }

    public List<Blog2> getProductDetails(boolean isSingeProductCheckout, Integer blog2Id) {

        if(isSingeProductCheckout && blog2Id != 0) {
            List<Blog2> list= new ArrayList<>();
            Blog2 blog = blogDao.findById(blog2Id).get();
            list.add(blog);
            return list;
        }else {

            String username = JwtRequestFilter.CURRENT_USER;
            User user = userDao.findById(username).get();

            return null;
        }

    }




}
