package com.PAF.backend.mapper;

import com.PAF.backend.dto.UserDto;
import com.PAF.backend.entity.Users;

public class UserMapper {

    public static UserDto mapToUserDto(Users user){
        return new UserDto(
            user.getId(),
            user.getFirstname(),
            user.getLastname(),
            user.getUsername(),
            user.getEmail(),
            user.getPassword(),
            user.getCreatedAt()

        );
    }

    public static Users mapToUser(UserDto userDto){
        return new Users(
                userDto.getId(),
                userDto.getFirstname(),
                userDto.getLastname(),
                userDto.getUsername(),
                userDto.getEmail(),
                userDto.getPassword(),
                userDto.getCreatedAt()
        );
    }

}
