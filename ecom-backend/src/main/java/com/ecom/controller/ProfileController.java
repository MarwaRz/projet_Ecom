package com.ecom.controller;

import com.ecom.dao.ProfileDao;
import com.ecom.entity.Profile;
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

public class ProfileController {

    @Autowired
    private ProfileDao repository;




    // get all employees
    @GetMapping("/profile")
    public List<Profile> getAllEmployees(){
        return repository.findAll();
    }



    @PreAuthorize("hasRole('Admin')")
    @PostMapping("/profile")
    public Profile  createProfile(@Valid @RequestBody Profile p) {
        return repository.save(p);
    }









    @GetMapping("/profile/{id}")
    public ResponseEntity<Profile> getById(@PathVariable Integer id) throws ResourceNotFoundException {
        Profile employee = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
        return ResponseEntity.ok(employee);
    }


    @PreAuthorize("hasRole('Admin')")
    @PutMapping("/profile/{id}")
    public ResponseEntity<Profile> update(@PathVariable  Integer id,
                                                     @RequestBody Profile p) throws ResourceNotFoundException {
        Profile profile = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("" + id));

        profile.setNom(p.getNom());
        profile.setEmail(p.getEmail());
        profile.setNum(p.getNum());
        profile.setDescription(p.getDescription());
        profile.setFb(p.getFb());
        profile.setInsta(p.getInsta());
        profile.setYoutube(p.getYoutube());
        profile.setStandard(p.getStandard());
        profile.setPremium(p.getPremium());
        profile.setEntreprise(p.getEntreprise());
        profile.setMaps(p.getMaps());
        profile.setAdresse(p.getAdresse());

         Profile updateProfile = repository.save(profile);
        return ResponseEntity.ok(updateProfile);
    }










}
