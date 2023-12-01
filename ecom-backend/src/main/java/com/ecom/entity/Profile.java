package com.ecom.entity;


import javax.persistence.*;

import javax.persistence.Column;

@Entity
@Table(name= "profile")
public class Profile {
    @Column(length = 2000)
    private String maps;
    private Integer id;
    private String nom;
    private String email;
    private String num;
    @Column(length = 2000)
    private String description;
    private String fb;
    private String insta;
    private String youtube;
private String standard;
    private String premium;
    private String entreprise;


    private String adresse;





    public Profile() {

    }

    public Profile(Integer id, String nom, String email, String num, String description, String fb, String insta, String youtube, String standard, String premium, String entreprise, String adresse) {
        this.id = id;
        this.nom = nom;
        this.email = email;
        this.num = num;
        this.description = description;
        this.fb = fb;
        this.insta = insta;
        this.youtube = youtube;
        this.standard = standard;
        this.premium = premium;
        this.entreprise = entreprise;
        this.adresse = adresse;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    public String getMaps() {
        return maps;
    }

    public void setMaps(String maps) {
        this.maps = maps;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNum() {
        return num;
    }

    public void setNum(String num) {
        this.num = num;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getFb() {
        return fb;
    }

    public void setFb(String fb) {
        this.fb = fb;
    }

    public String getInsta() {
        return insta;
    }

    public void setInsta(String insta) {
        this.insta = insta;
    }

    public String getYoutube() {
        return youtube;
    }

    public void setYoutube(String youtube) {
        this.youtube = youtube;
    }

    public String getStandard() {
        return standard;
    }

    public void setStandard(String standard) {
        this.standard = standard;
    }

    public String getPremium() {
        return premium;
    }

    public void setPremium(String premium) {
        this.premium = premium;
    }

    public String getEntreprise() {
        return entreprise;
    }

    public void setEntreprise(String entreprise) {
        this.entreprise = entreprise;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }
}
