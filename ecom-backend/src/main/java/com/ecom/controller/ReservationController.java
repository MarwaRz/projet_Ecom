package com.ecom.controller;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import com.ecom.configuration.JwtRequestFilter;
import com.ecom.dao.ReservationDao;
import com.ecom.dao.UserDao;
import com.ecom.entity.*;
import com.ecom.service.BlogService;
import com.ecom.service.ReservationService;
import com.ecom.service.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.ecom.service.ProductService;

import javax.validation.Valid;

@RestController
public class ReservationController {

    @Autowired
    private ReservationService blogService;
    @Autowired
    private ReservationDao blogDao;
    @Autowired
    private UserDao userDao;









    @PreAuthorize("hasRole('User')")

    @PostMapping(value = {"/getReservationUser"}, consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public Reservation addNewReservationUser(@RequestPart("blog") Reservation reservation,
                                 @RequestPart("imageFile") MultipartFile[] file) throws IOException {


            String currentUser = JwtRequestFilter.CURRENT_USER;
            User user= userDao.findById(currentUser).get();
            reservation.setU(user);
            Set<ImageR> images = uplodImage(file);
            reservation.setImage(images);
        return blogDao.save(reservation);



    }


    public Set<ImageR> uplodImage(MultipartFile[] multipartFiles) throws IOException{

        Set<ImageR> imageModels = new HashSet<>();

        for(MultipartFile file: multipartFiles) {
            ImageR imageModel = new ImageR(
                    file.getOriginalFilename(),
                    file.getContentType(),
                    file.getBytes());
            imageModels.add(imageModel);
        }
        return imageModels;
    }


    @GetMapping({"/getReservationUser"})
    public List<Reservation> getOrderDetails() {
        return blogService.getReservationUser();
    }



    @PostMapping(value = {"/addReservation"}, consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public Reservation addNewReservation(@RequestPart("blog") Reservation blog,
                           @RequestPart("imageFile") MultipartFile[] file) {

        try {
            Set<ImageR> images = uplodImage(file);
            blog.setImage(images);
            return blogService.addNewBlog(blog);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }


    }















    @GetMapping("/p/{reservationId}")
    public ResponseEntity<Reservation> getById(@PathVariable Integer reservationId) throws ResourceNotFoundException {
        Reservation employee = blogDao.findById(reservationId)
                .orElseThrow(() -> new ResourceNotFoundException("Reservation not found with id: " + reservationId));
        return ResponseEntity.ok(employee);
    }



    @PutMapping("/p/{reservationId}")
    public ResponseEntity<Reservation> update(@PathVariable  Integer reservationId,
                                          @RequestBody Reservation p) throws ResourceNotFoundException {
        Reservation profile = blogDao.findById(reservationId)
                .orElseThrow(() -> new ResourceNotFoundException("" + reservationId));

        profile.setStatus(p.getStatus());
        profile.setTotal(p.getTotal());



        Reservation updateProfile = blogDao.save(profile);
        return ResponseEntity.ok(updateProfile);
    }





    @GetMapping({"/getAllReservation"})

    public List<Reservation> getAllBlog(@RequestParam(defaultValue = "0") int pageNumber
            , @RequestParam(defaultValue = "") String searchKey ){
        return blogService.getAllBlog(pageNumber, searchKey);}



    @GetMapping({"/getReservationById/{reservationId}"})
    public Reservation getBlogById(@PathVariable("reservationId") Integer reservationId) {

        return blogService.getBlogDetailsById(reservationId);

    }

    @PreAuthorize("hasRole('Admin')")
    @DeleteMapping({"/deleteReservation/{reservationId}"})
    public void deleteBlogtDetailes(@PathVariable("reservationId") Integer reservationId) {
        blogService.deleteBlog(reservationId);
    }

    @GetMapping({"/getReservationDetails/{isSingeProductCheckout}/{reservationId}"})
    public List<Reservation> getBlogDetails(@PathVariable(name="isSingeProductCheckout") boolean isSingeProductCheckout,
                                     @PathVariable(name= "reservationId") Integer reservationId) {

        return blogService.getProductDetails(isSingeProductCheckout, reservationId);


    }







/*
    @PreAuthorize("hasRole('User')")
    @GetMapping({"/getOrderDetailss"})
    public List<Reservation> getOrderDetails() {
        return blogService.getOrderDetails();
    }
*/
}
