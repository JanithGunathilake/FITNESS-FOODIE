package com.PAF.backend.mapper;

import com.PAF.backend.dto.userPostDto;
import com.PAF.backend.entity.userPost;



public class userPostMapper {

    public static userPostDto mapTouserPostDto(userPost userpost){
        return new userPostDto(
                userpost.getId(),
                userpost.getDescription(),
                userpost.getImages(),
                userpost.getVideo(),
                userpost.getCreatedAt(),
                userpost.getLastModifiedAt(),
                userpost.getCreatedBy()

        );
    }

    public static userPost mapTouserPost(userPostDto userpostDto){
        return new userPost(
                userpostDto.getId(),
                userpostDto.getDescription(),
                userpostDto.getImages(),
                userpostDto.getVideo(),
                userpostDto.getCreatedAt(),
                userpostDto.getLastModifiedAt(),
                userpostDto.getCreatedBy()

        );
    }

}
