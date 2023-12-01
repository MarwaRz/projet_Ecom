package com.ecom.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.persistence.criteria.CriteriaBuilder;

@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer commentId;
    private String comment;

    private String date;
    private String time;
    private Integer rate;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})

    @OneToOne(fetch = FetchType.LAZY) // consider FetchType.LAZY if appropriate

    @JoinColumn(name = "user_cmt")
    private User u;

    public Comment() {

    }

    public int getRate() {
        return rate;
    }

    public void setRate(int rate) {
        this.rate = rate;
    }

    public Integer getCommentId() {
        return commentId;
    }

    public void setCommentId(Integer commentId) {
        this.commentId = commentId;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
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

    public User getU() {
        return u;
    }

    public void setU(User u) {
        this.u = u;
    }

    public Comment(Integer commentId, String comment, String date, String time, Integer rate,User u) {
        this.commentId = commentId;
        this.comment = comment;
        this.date = date;
        this.time = time;
        this.rate=rate;
        this.u = u;
    }
}
