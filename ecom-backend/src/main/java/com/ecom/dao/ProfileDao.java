package com.ecom.dao;
import com.ecom.entity.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface ProfileDao extends JpaRepository<Profile, Integer>{

}
