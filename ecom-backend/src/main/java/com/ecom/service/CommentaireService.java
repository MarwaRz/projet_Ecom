/*package com.ecom.service;

import java.util.ArrayList;
import java.util.List;

import com.ecom.dao.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecom.configuration.JwtRequestFilter;
import com.ecom.entity.Cart;
import com.ecom.entity.Commentaire;
import com.ecom.entity.ComentaireInput;
import com.ecom.entity.OrderProductQuantity;
import com.ecom.entity.Product;
import com.ecom.entity.User;

@Service
public class CommentaireService {

    private static final String ORDER_PLACED = "Placed";

    @Autowired
    private CommentaireDao orderDetailDao;

    @Autowired
    private ProductDao productDao;

    @Autowired
    private UserDao userDao;

    @Autowired
    private CartDao cartDao;

    public List<Commentaire> getAllOrderDetails(){
        List<Commentaire> orderDetails = new ArrayList<>();
        orderDetailDao.findAll().forEach(e -> orderDetails.add(e));

        return orderDetails;
    }

    public List<Commentaire> getOrderDetails() {
        String currentUser = JwtRequestFilter.CURRENT_USER;
        User user = userDao.findById(currentUser).get();

        return orderDetailDao.findByUser(user);
    }
    public void deleteCommentaire(Integer commantaireId) {
        orderDetailDao.deleteById(commantaireId);
    }

    public List<Commentaire> getCommentaireProduit(Product formation) {
        Product formations = productDao.findById(formation.getProductId()).get();
        return orderDetailDao.findByProduct(formations);
    }

    public void placeOrder(ComentaireInput orderInput, boolean isSingleProductCheckout) {
        List<OrderProductQuantity> productQuantityList = orderInput.getOrderProductQuantityList();

        for(OrderProductQuantity o: productQuantityList) {

            Product product = productDao.findById(o.getProductId()).get();

            String currentUser = JwtRequestFilter.CURRENT_USER;
            User user= userDao.findById(currentUser).get();

            Commentaire orderDetail = new Commentaire(
                    orderInput.getCommentaireId(),
                    orderInput.getCommentaire(),

                    product.getProductDiscountedPrice()*o.getQuantity(),

                    product,
                    user);

            orderDetailDao.save(orderDetail);
        }
    }



}
*/
