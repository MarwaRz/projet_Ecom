package com.ecom.dao;

import java.util.List;

import com.ecom.entity.Blog3;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface Blog3Dao extends CrudRepository<Blog3, Integer>{

    public List<Blog3> findAll(Pageable pageable);

    public List<Blog3>  findByBlogNameContainingIgnoreCaseOrBlogDescriptionContainingIgnoreCase(
            String key1, String key2, Pageable pageable);


}
