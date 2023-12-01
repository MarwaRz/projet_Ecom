/*package com.ecom.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table
public class Commentaire {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer commantaireId;
    private String commentaire ;
    @OneToOne
    private Product product;


    public Commentaire(Integer commantaireId,String commentaire, double v, Product product, User user) {
        this.commantaireId= commantaireId;
        this.commentaire = commentaire;
        this.product = product;
        this.user = user;
    }


    public String getCommentaire() {
        return commentaire;
    }

    public void setCommentaire(String commentaire) {
        this.commentaire = commentaire;
    }

    @OneToOne
    private User user;



    public Commentaire() {
        super();
        // TODO Auto-generated constructor stub
    }





    public Integer getCommantaireId() {
        return commantaireId;
    }
    public void setCommantaireId(Integer commantaireId) {
        this.commantaireId = commantaireId;
    }
    public Product getProduct() {
        return product;
    }
    public void setProduct(Product product) {
        this.product = product;
    }
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }



}*/
