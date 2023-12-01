package com.ecom.dao;

import java.util.List;

import com.ecom.entity.Blog;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ecom.entity.Product;

@Repository
public interface BlogDao extends CrudRepository<Blog, Integer>{

    public List<Blog> findAll(Pageable pageable);

    public List<Blog>  findByBlogNameContainingIgnoreCaseOrBlogDescriptionContainingIgnoreCase(
            String key1, String key2, Pageable pageable);


}
