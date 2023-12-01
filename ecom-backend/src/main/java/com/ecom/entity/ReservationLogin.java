/*package com.ecom.entity;

import java.util.Date;
import java.util.Set;

import javax.persistence.*;

@Entity
public class ReservationLogin{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String  adresse;
    private String contact;

    @Column(length = 1000)
    private String service;
    private String date;
    private String time;
@ManyToOne
@JoinColumn(name="user_id")
private User user ;



    @ManyToMany(fetch = FetchType.EAGER, cascade =CascadeType.ALL)
    @JoinTable(name = "reservation_images",
            joinColumns = {
                    @JoinColumn(name = "reservation_id")
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "image_id")
            })
    private Set<ImageRL> images;


    public ReservationLogin(Integer id, String adresse, String contact, String service, String date, String time, User user) {
        this.id = id;
        this.adresse = adresse;
        this.contact = contact;
        this.service = service;
        this.date = date;
        this.time = time;
        this.user = user;
    }

    public ReservationLogin() {
        super();

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getService() {
        return service;
    }

    public void setService(String service) {
        this.service = service;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Set<ImageRL> getImages() {
        return images;
    }

    public void setImages(Set<ImageRL> images) {
        this.images = images;
    }
}
*/
