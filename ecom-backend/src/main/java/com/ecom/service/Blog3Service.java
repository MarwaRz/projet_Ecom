package com.ecom.service;

import java.util.ArrayList;
import java.util.List;

import com.ecom.dao.Blog3Dao;
import com.ecom.entity.Blog3;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.ecom.dao.UserDao;


@Service
public class Blog3Service {

    @Autowired
    private Blog3Dao blogDao;
    @Autowired
    private UserDao userDao;


    public Blog3 addNewBlog(Blog3 blog) {
        return blogDao.save(blog);
    }

    public List<Blog3> getAllBlog(int pageNumber, String searchKey){
        Pageable pageable = PageRequest.of(pageNumber, 8);

        if(searchKey.equals("")) {
            return (List<Blog3>) blogDao.findAll(pageable);
        }else {
            return (List<Blog3>)blogDao.findByBlogNameContainingIgnoreCaseOrBlogDescriptionContainingIgnoreCase(searchKey, searchKey, pageable);
        }

    }

    public void deleteBlog(Integer blogId) {
        blogDao.deleteById(blogId);
    }


    public Blog3 getBlogDetailsById(Integer blogId) {

        return blogDao.findById(blogId).get();
    }
    public List<Blog3> getProductDetails(boolean isSingeProductCheckout, Integer blogId) {

        if(isSingeProductCheckout && blogId != 0) {
            List<Blog3> list= new ArrayList<>();
            Blog3 product = blogDao.findById(blogId).get();
            list.add(product);
            return list;
        }else {



            return  null ;

        }


    }




}
