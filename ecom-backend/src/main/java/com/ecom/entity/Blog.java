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
public class Blog {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer blogId;
    private String  blogName;
    @Column(length = 2000)
    private String blogDescription;
    private String type;
    @Column(length = 1000)
    private String description;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @ManyToMany(fetch = FetchType.EAGER, cascade =CascadeType.ALL)
    @JoinTable(name = "blog_images",
            joinColumns = {
                    @JoinColumn(name = "blog_id")
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

    public Blog() {
        super();

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

    public String getblogName() {
        return blogName;
    }

    public void setBlogName(String blogName) {
        this.blogName = blogName;
    }



    public Blog(Integer blogId, String blogName, String blogDescription,String type ,
                   String description) {
        super();
        this.blogId =blogId;
        this.blogName = blogName;
        this.blogDescription = blogDescription;
        this.type = type;
        this.description = description;
    }
}
