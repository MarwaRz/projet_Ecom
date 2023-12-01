package com.ecom.dao;

import com.ecom.entity.Blog2;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Blog2Dao extends CrudRepository<Blog2, Integer> {

    public List<Blog2> findAll(Pageable pageable);

    public List<Blog2>  findByBlog2NameContainingIgnoreCaseOrBlog2DescriptionContainingIgnoreCase(
            String key1, String key2, Pageable pageable);


}
