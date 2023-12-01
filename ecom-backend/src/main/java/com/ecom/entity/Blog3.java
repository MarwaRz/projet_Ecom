package com.ecom.entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

@Entity
public class Blog3 {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer blogId;
    private String  blogName;
    @Column(length = 2000)
    private String blogDescription;
    private String type;
    private String date;
    @Column(length = 1000)
    private String description;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @ManyToMany(fetch = FetchType.EAGER, cascade =CascadeType.ALL)
    @JoinTable(name = "blog3_images",
            joinColumns = {
                    @JoinColumn(name = "blog3_id")
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "image_id")
            })
    private Set<ImageModelBlog> BlogImages;



    public Set<ImageModelBlog> getBlogImages() {
        return BlogImages;
    }

    public void setBlogImages(Set<ImageModelBlog> BlogImages) {
        this.BlogImages = BlogImages;
    }

    public Blog3() {
        super();

    }



    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getBlogId() {
        return blogId;
    }

    public void setBlogId(Integer blogId) {
        this.blogId = blogId;
    }

    public String getDescription() {
        return description;
    }

    public void setmarwa(String marwa) {
        this.description = marwa;
    }

    public String getBlogDescription() {
        return blogDescription;
    }

    public void setBlogDescription(String blogDescription) {
        this.blogDescription = blogDescription;
    }

    public String getBlogName() {
        return blogName;
    }

    public void setBlogName(String blogName) {
        this.blogName = blogName;
    }

    public Blog3(Integer blogId, String blogName, String blogDescription, String type, String date, String description, Set<ImageModelBlog> blogImages) {
        this.blogId = blogId;
        this.blogName = blogName;
        this.blogDescription = blogDescription;
        this.type = type;
        this.date = date;
        this.description = description;
        BlogImages = blogImages;
    }
}
