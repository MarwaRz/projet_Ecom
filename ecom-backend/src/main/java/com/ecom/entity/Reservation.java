package com.ecom.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Set;

import javax.persistence.*;

@Entity
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer reservationId;
    private String reservationName;
    private String nom;
    private String contact;
    private String adresse;
    private String date;
    private String email;


    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})

    @ManyToOne(fetch = FetchType.LAZY) // consider FetchType.LAZY if appropriate

    @JoinColumn(name = "user_id")
    private User u;









    @Column(length = 1000)
    private Integer surface;
    private Integer intervention;

    private String prestation;
    private Integer total;
    private String status;

    @ManyToMany(fetch = FetchType.EAGER, cascade =CascadeType.ALL)
    @JoinTable(name = "reservation_images",
            joinColumns = {
                    @JoinColumn(name = "reservation_id")
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "imageRes_id")
            })
    private Set<ImageR> image;

    public Reservation() {

    }

    public Integer getReservationId() {
        return reservationId;
    }

    public User getU() {
        return u;
    }

    public void setU(User u) {
        this.u = u;
    }

    public void setReservationId(Integer reservationId) {
        this.reservationId = reservationId;
    }

    public String getReservationName() {
        return reservationName;
    }

    public void setReservationName(String reservationName) {
        this.reservationName = reservationName;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


    public Integer getSurface() {
        return surface;
    }

    public void setSurface(Integer surface) {
        this.surface = surface;
    }

    public Integer getIntervention() {
        return intervention;
    }

    public void setIntervention(Integer intervention) {
        this.intervention = intervention;
    }

    public String getPrestation() {
        return prestation;
    }

    public void setPrestation(String prestation) {
        this.prestation = prestation;
    }

    public Integer getTotal() {
        return total;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Set<ImageR> getImage() {
        return image;
    }

    public void setImage(Set<ImageR> image) {
        this.image = image;
    }

    public Reservation (Integer reservationId, String reservationName, String nom, String contact, String adresse, String date, String email, Integer surface, Integer intervention, String prestation, Integer total, String status, Set<ImageR> image , User u) {
        this.reservationId = reservationId;
        this.reservationName = reservationName;
        this.nom = nom;
        this.contact = contact;
        this.adresse = adresse;
        this.date = date;
        this.email = email;
        this.surface = surface;
        this.intervention = intervention;
        this.prestation = prestation;
        this.total = total;
        this.status = status;
        this.image = image;
        this.u=u;
    }
}
