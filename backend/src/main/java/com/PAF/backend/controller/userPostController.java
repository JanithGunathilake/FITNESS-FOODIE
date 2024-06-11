package com.PAF.backend.controller;

import com.PAF.backend.dto.userPostDto;
import com.PAF.backend.service.userPostService;
import jakarta.servlet.http.HttpSession;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/userPost")
public class userPostController {

    private userPostService userpostService;

    private HttpSession httpSession;



    //Build add post REST API
    @PostMapping
    public ResponseEntity<userPostDto> createuserPost(@RequestParam("description") String description,
                                                      @RequestParam("images") MultipartFile[] images,
                                                      @RequestParam("video") String video) {
        try {
            // Retrieve user ID from session
            Long userId = (Long) httpSession.getAttribute("userId");

            // If userId is null, return unauthorized or handle as per your requirement
            if (userId == null) {
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }

            // Call the service method passing userId along with other parameters
            userPostDto userPostDto = userpostService.createuserPost(userId, description, images, video);
            return new ResponseEntity<>(userPostDto, HttpStatus.CREATED);
        } catch (IOException e) {
            // Handle exception
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



    //Build Get Post by ID REST API
    @GetMapping("{id}")
    public ResponseEntity<userPostDto> getuserPostById(@PathVariable("id") Long postId){
        userPostDto userpostDto = userpostService.getuserPostById(postId);
        return ResponseEntity.ok(userpostDto);
    }

    //Build Get All Posts REST API
    @GetMapping
    public ResponseEntity<List<userPostDto>> getAlluserPost() {
        List<userPostDto> userpost = userpostService.getAllPost();
        return ResponseEntity.ok(userpost);
    }

    @PutMapping("{id}")
    public ResponseEntity<userPostDto> updatePost(@PathVariable("id") Long postId, @RequestBody userPostDto updatePost){
        userPostDto userpostDto = userpostService.upldatePost(postId, updatePost);
        return ResponseEntity.ok(userpostDto);
    }

    // Build Delete Post REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deletePost(@PathVariable("id") Long postId){
        userpostService.deletePost(postId);
        return ResponseEntity.ok("Employee Deleted Successfully...! ");
    }



}
