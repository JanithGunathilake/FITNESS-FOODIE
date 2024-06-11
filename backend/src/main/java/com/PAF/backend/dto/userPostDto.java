package com.PAF.backend.dto;

import java.time.LocalDateTime;
import java.util.List;

import com.PAF.backend.entity.Users;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class userPostDto {

    private Long id;
    private String description;
    private List<String> images;
    private String video;
    private LocalDateTime createdAt;
    private LocalDateTime lastModifiedAt;
    private Users createdBy;

}
