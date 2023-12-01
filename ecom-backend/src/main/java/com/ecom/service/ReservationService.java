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
public class ReservationService {

    @Autowired
    private ReservationDao blogDao;
    @Autowired
    private UserDao userDao;








    public Reservation addNewBlog(Reservation blog) {


        return blogDao.save(blog);
    }

    public List<Reservation> getAllBlog(int pageNumber, String searchKey) {
        Pageable pageable = PageRequest.of(pageNumber, 8);

        if (searchKey.equals(""))  {
            return (List<Reservation>) blogDao.findAll(pageable);
        } else {
            return (List<Reservation>) blogDao.findByNomContainingIgnoreCaseOrReservationNameContainingIgnoreCase(searchKey, searchKey, pageable);
        }

    }




    public List<Reservation> getReservationUser() {
        String currentUser = JwtRequestFilter.CURRENT_USER;
        User user = userDao.findById(currentUser).get();

        return blogDao.findByU(user);
    }






    public void deleteBlog(Integer reservationId) {
        blogDao.deleteById(reservationId);
    }

    public Reservation getBlogDetailsById(Integer reservationId) {

        return blogDao.findById(reservationId).get();
    }

    public List<Reservation> getProductDetails(boolean isSingeProductCheckout, Integer reservationId) {

        if(isSingeProductCheckout && reservationId != 0) {
            List<Reservation> list= new ArrayList<>();
            Reservation blog = blogDao.findById(reservationId).get();
            list.add(blog);
            return list;
        }else {

            String username = JwtRequestFilter.CURRENT_USER;
            User user = userDao.findById(username).get();

            return null;
        }

    }




}
