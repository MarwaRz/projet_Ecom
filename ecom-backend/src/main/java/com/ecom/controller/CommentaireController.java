/*package com.ecom.controller;

import java.util.List;

import com.ecom.entity.*;
import com.ecom.service.CommentaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.ecom.dao.CartDao;
import com.ecom.service.OrderDetailService;

@RestController
public class CommentaireController {

    @Autowired
    private CommentaireService orderDetailService;



    @PreAuthorize("hasRole('User')")
    @PostMapping({"/placeCommentaire/{isSingleProductCheckout}"})
    public void commenter(@PathVariable(name= "isSingleProductCheckout") boolean isSingleProductCheckout, @RequestBody ComentaireInput orderInput ) {
        orderDetailService.placeOrder(orderInput, isSingleProductCheckout );

    }


    @DeleteMapping({"/deleteCommentaire/{commantaireId}"})
    public void deleteCommentaire(@PathVariable("commantaireId") Integer commantaireId) {
        orderDetailService.deleteCommentaire(commantaireId);
    }




    @PreAuthorize("hasRole('User')")
    @GetMapping({"/getCommentaire"})
    public List<Commentaire> getOrderDetails() {
        return orderDetailService.getOrderDetails();
    }


    @GetMapping({"/getAllCommentaire"})
    public List<Commentaire> getAllOrderDetails() {
        return orderDetailService.getAllOrderDetails();
    }


    @GetMapping({"/getAllCommentaireProduit/{product}"})
    public List<Commentaire> getOrderDetailsFormation(Product p){
        return orderDetailService.getCommentaireProduit(p);
    }

}*/
