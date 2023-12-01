package com.ecom.controller;

import java.util.*;
import java.awt.PageAttributes.MediaType;
import java.io.File;
import java.io.FileInputStream;
import java.nio.file.Files;
import java.nio.file.Paths;

import com.ecom.dao.Blog2Dao;
import com.ecom.entity.Blog;
import com.ecom.entity.Blog2;
import com.ecom.entity.ImageModelBlog;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import javax.servlet.ServletContext;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ecom.service.Response;
import com.ecom.service.ResourceNotFoundException;




import com.sun.javafx.iio.ImageStorage;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class Blog2Controller {
    @Autowired
    Blog2Dao repository;
    @Autowired  ServletContext context;






    @GetMapping("/articles")
    public List<Blog2> getAllarticles() {
        System.out.println("Get all articles...");

        List<Blog2> articles = new ArrayList<>();
        repository.findAll().forEach(articles::add);

        return articles;
    }

    @GetMapping ("/getAll")
    public ResponseEntity<List<String>> getAll()
    {
        List<String> listArt = new ArrayList<String>();
        String filesPath = context.getRealPath("/Images");
        File filefolder = new File(filesPath);
        if (filefolder != null)
        {
            for (File file :filefolder.listFiles())
            {
                if(!file.isDirectory())
                {
                    String encodeBase64 = null;
                    try {
                        String extension = FilenameUtils.getExtension(file.getName());
                        FileInputStream fileInputStream = new FileInputStream(file);
                        byte[] bytes = new byte[(int)file.length()];
                        fileInputStream.read(bytes);
                        encodeBase64 = Base64.getEncoder().encodeToString(bytes);
                        listArt.add("data:image/"+extension+";base64,"+encodeBase64);
                        fileInputStream.close();


                    }catch (Exception e){

                    }
                }
            }
        }
        return new ResponseEntity<List<String>>(listArt,HttpStatus.OK);
    }




    @PostMapping("/articles")
    public ResponseEntity<Response> createArticle (@RequestParam("file") MultipartFile file,
                                                   @RequestParam("article") String article) throws JsonParseException , JsonMappingException , Exception
    {
        System.out.println("Ok .............");
        Blog2 arti = new ObjectMapper().readValue(article, Blog2.class);
        boolean isExit = new File(context.getRealPath("/Images/")).exists();
        if (!isExit)
        {
            new File (context.getRealPath("/Images/")).mkdir();
            System.out.println("mk dir.............");
        }
        String filename = file.getOriginalFilename();
        String newFileName = FilenameUtils.getBaseName(filename)+"."+FilenameUtils.getExtension(filename);
        File serverFile = new File (context.getRealPath("/Images/"+File.separator+newFileName));
        try
        {
            System.out.println("Image");
            FileUtils.writeByteArrayToFile(serverFile,file.getBytes());

        }catch(Exception e) {
            e.printStackTrace();
        }


        arti.setFileName(newFileName);
        Blog2 art = repository.save(arti);
        if (art != null)
        {
            return new ResponseEntity<Response>(new Response (""),HttpStatus.OK);
        }
        else
        {
            return new ResponseEntity<Response>(new Response ("Article not saved"),HttpStatus.BAD_REQUEST);
        }
    }



    @GetMapping("/articles/{blogId}")
    public ResponseEntity<Blog2> getArticleById(@PathVariable(value = "blogId") Integer blogId)
            throws ResourceNotFoundException {
        Blog2 Article = repository.findById(blogId)
                .orElseThrow(() -> new ResourceNotFoundException("Categorie not found for this id :: " + blogId));
        return ResponseEntity.ok().body(Article);
    }

    @GetMapping(path="/Imgarticles/{id}")
    public byte[] getPhoto(@PathVariable("id") Integer blog2Id) throws Exception{
        Blog2 Article   = repository.findById(blog2Id).get();
        return Files.readAllBytes(Paths.get(context.getRealPath("/Images/")+Article.getFileName()));
    }




    @DeleteMapping("/articles/{id}")
    public Map<String, Boolean> deleteArticle(@PathVariable(value = "id") Integer blog2Id)
            throws ResourceNotFoundException {
        Blog2 Article = repository.findById(blog2Id)
                .orElseThrow(() -> new ResourceNotFoundException("Article not found  id :: " + blog2Id));
        repository.delete(Article);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

    @DeleteMapping("/articles/delete")
    public ResponseEntity<String> deleteAllarticles() {
        System.out.println("Delete All articles...");
        repository.deleteAll();
        return new ResponseEntity<>("All articles have been deleted!", HttpStatus.OK);
    }

    @PutMapping("/articles/{id}")
    public ResponseEntity<Blog2> updateArticle(@PathVariable("id") Integer blog2Id, @RequestBody Blog2 Blog2) {
        System.out.println("Update Article with ID = " + blog2Id + "...");
        Optional<Blog2> Blog2Info = repository.findById(blog2Id);
        if (Blog2Info.isPresent()) {
            Blog2 blog= Blog2Info.get();
            blog.setBlog2Name(Blog2.getBlog2Name());
            blog.setBlog2Description(Blog2.getBlog2Description());

            blog.setType2(Blog2.getType2());

            blog.setDate2(Blog2.getDate2());


            return new ResponseEntity<>(repository.save(Blog2), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }












}
