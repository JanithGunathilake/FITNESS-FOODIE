package com.PAF.backend.service;

import com.PAF.backend.dto.userPostDto;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface userPostService {
    userPostDto createuserPost(Long userId, String description, MultipartFile[] images, String video) throws IOException;

    userPostDto getuserPostById(Long postId);

    List<userPostDto> getAllPost();

    userPostDto upldatePost(Long postId, userPostDto updatePost);

    void deletePost(Long postId);

}
