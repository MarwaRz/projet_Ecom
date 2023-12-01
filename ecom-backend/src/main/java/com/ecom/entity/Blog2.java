package com.ecom.entity;

import java.util.Date;
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
public class Blog2 {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer blog2Id;
    private String  blog2Name;
    @Column(length = 1000)
    private String blog2Description;
    private String type2;

    private String date2;



    private String fileName;

    public Blog2() {

    }


    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public Integer getBlog2Id() {
        return blog2Id;
    }

    public void setBlog2Id(Integer blog2Id) {
        this.blog2Id = blog2Id;
    }

    public String getBlog2Name() {
        return blog2Name;
    }

    public void setBlog2Name(String blog2Name) {
        this.blog2Name = blog2Name;
    }

    public String getBlog2Description() {
        return blog2Description;
    }

    public void setBlog2Description(String blog2Description) {
        this.blog2Description = blog2Description;
    }

    public String getType2() {
        return type2;
    }

    public void setType2(String type2) {
        this.type2 = type2;
    }

    public String getDate2() {
        return date2;
    }

    public void setDate2(String date2) {
        this.date2 = date2;
    }

    public Blog2(Integer blog2Id, String blog2Name, String blog2Description, String type2, String date2, String fileName) {
        this.blog2Id = blog2Id;
        this.blog2Name = blog2Name;
        this.blog2Description = blog2Description;
        this.type2 = type2;
        this.date2 = date2;
        this.fileName = fileName;
    }
}
