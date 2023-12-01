package com.ecom.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.ecom.dao.BlogDao;
import com.ecom.entity.Blog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.ecom.configuration.JwtRequestFilter;
;
import com.ecom.dao.UserDao;
import com.ecom.entity.User;

@Service
public class BlogService {

    @Autowired
    private BlogDao blogDao;
    @Autowired
    private UserDao userDao;


    public Blog addNewBlog(Blog blog) {
        return blogDao.save(blog);
    }

    public List<Blog> getAllBlog(int pageNumber, String searchKey){
        Pageable pageable = PageRequest.of(pageNumber, 8);

        if(searchKey.equals("")) {
            return (List<Blog>) blogDao.findAll(pageable);
        }else {
            return (List<Blog>)blogDao.findByBlogNameContainingIgnoreCaseOrBlogDescriptionContainingIgnoreCase(searchKey, searchKey, pageable);
        }

    }

    public void deleteBlog(Integer blogId) {
        blogDao.deleteById(blogId);
    }


    public Blog getBlogDetailsById(Integer blogId) {

        return blogDao.findById(blogId).get();
    }
    public List<Blog> getProductDetails(boolean isSingeProductCheckout, Integer blogId) {

        if(isSingeProductCheckout && blogId != 0) {
            List<Blog> list= new ArrayList<>();
            Blog product = blogDao.findById(blogId).get();
            list.add(product);
            return list;
        }else {

            String username = JwtRequestFilter.CURRENT_USER;
            User user = userDao.findById(username).get();


            return  null ;

        }


    }




}
