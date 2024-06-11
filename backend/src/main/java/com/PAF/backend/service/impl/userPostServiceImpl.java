package com.PAF.backend.service.impl;

import com.PAF.backend.dto.userPostDto;
import com.PAF.backend.entity.Users;
import com.PAF.backend.entity.userPost;
import com.PAF.backend.exception.ResourceNotFoundException;
import com.PAF.backend.repository.UserRepository;
import com.PAF.backend.repository.userPostRepository;
import com.PAF.backend.service.userPostService;
import com.PAF.backend.mapper.userPostMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class userPostServiceImpl implements userPostService {

    private userPostRepository userpostRepository;

    private UserRepository userrepository;

    @Override
    public userPostDto createuserPost(Long userId, String description, MultipartFile[] images, String video) throws IOException {
        userPost userpost = new userPost();

        // Fetch the Users entity based on the userId
        Users user = userrepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));

        // Set the user entity as createdBy
        userpost.setCreatedBy(user);

        // Set description and video fields
        userpost.setDescription(description);
        userpost.setVideo(video);

        // Initialize the images list
        userpost.setImages(new ArrayList<>());

        // Handle image uploads
        if (images != null && images.length > 0) {
            // Process each image file and store them in the entity
            for (MultipartFile image : images) {
                byte[] imageData = image.getBytes(); // Get image data as byte array
                String imageName = image.getOriginalFilename();
                String imagePath = saveImage(imageData, imageName);

                userpost.getImages().add(imagePath);
            }
        }

        // Save the user post entity
        userPost savedUserPost = userpostRepository.save(userpost);
        return userPostMapper.mapTouserPostDto(savedUserPost);
    }


    private String saveImage(byte[] imageData, String imageName) {
        String directory = "backend/src/main/java/com/PAF/backend/uploads/";
        String imagePath = directory + imageName;
        try {
            Path path = Paths.get(directory + imageName);
            Files.write(path, imageData);
        } catch (IOException e) {
            e.printStackTrace(); // Handle the exception appropriately
        }
        return imagePath;
    }

    @Override
    public userPostDto getuserPostById(Long postId) {
        userPost userpost = userpostRepository.findById(postId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Post is Not exist with given id" + postId));

        return userPostMapper.mapTouserPostDto(userpost);
    }

    @Override
    public List<userPostDto> getAllPost() {
        List<userPost> userposts = userpostRepository.findAll();
        return userposts.stream().map((userpost) -> userPostMapper.mapTouserPostDto(userpost)).collect(Collectors.toList());

    }

    @Override
    public userPostDto upldatePost(Long postId, userPostDto updatePost) {

        userPost userpost = userpostRepository.findById(postId).orElseThrow(
                () -> new ResourceNotFoundException("Post is not exist with given Id " + postId)
        );

        userpost.setDescription(updatePost.getDescription());

        userPost updatedPostObj = userpostRepository.save(userpost);



        return userPostMapper.mapTouserPostDto(updatedPostObj);
    }

    @Override
    public void deletePost(Long postId) {

        userPost userpost = userpostRepository.findById(postId).orElseThrow(
                () -> new ResourceNotFoundException("Post is not exist with given Id " + postId)
        );

        userpostRepository.deleteById(postId);

    }
}
