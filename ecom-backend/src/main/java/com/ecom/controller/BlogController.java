package com.ecom.controller;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.ecom.entity.Blog;
import com.ecom.entity.ImageModelBlog;
import com.ecom.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ecom.entity.Product;
import com.ecom.service.ProductService;

@RestController
public class BlogController {

    @Autowired
    private BlogService blogService;

    @PreAuthorize("hasRole('Admin')")
    @PostMapping(value = {"/addNewBlog"}, consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public Blog addNewBlog(@RequestPart("blog") Blog blog,
                                 @RequestPart("imageFile") MultipartFile[] file) {

        try {
            Set<ImageModelBlog> images = uplodImage(file);
            blog.setBlogImages(images);
            return blogService.addNewBlog(blog);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }


    }


    public Set<ImageModelBlog> uplodImage(MultipartFile[] multipartFiles) throws IOException{

        Set<ImageModelBlog> imageModels = new HashSet<>();

        for(MultipartFile file: multipartFiles) {
            ImageModelBlog imageModel = new ImageModelBlog(
                    file.getOriginalFilename(),
                    file.getContentType(),
                    file.getBytes());
            imageModels.add(imageModel);
        }
        return imageModels;
    }


    @GetMapping({"/getAllBlog"})
    public List<Blog> getAllBlog(@RequestParam(defaultValue = "0") int pageNumber
            , @RequestParam(defaultValue = "") String searchKey){
        return blogService.getAllBlog(pageNumber, searchKey);
    }


    @GetMapping({"/getBlogById/{blogId}"})
    public Blog getBlogById(@PathVariable("blogId") Integer blogId) {

        return blogService.getBlogDetailsById(blogId);

    }






    @PreAuthorize("hasRole('Admin')")
    @DeleteMapping({"/deleteBlogDetails/{blogId}"})
    public void deleteBlogtDetailes(@PathVariable("blogId") Integer blogId) {
        blogService.deleteBlog(blogId);
    }

    @PreAuthorize("hasRole('User')")
    @GetMapping({"/getBlogDetails/{isSingeProductCheckout}/{blogId}"})
    public List<Blog> getBlogDetails(@PathVariable(name="isSingeProductCheckout") boolean isSingeProductCheckout,
                                           @PathVariable(name= "blogId") Integer blogId) {

        return blogService.getProductDetails(isSingeProductCheckout, blogId);


    }

}
