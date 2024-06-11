package com.PAF.backend.service.impl;

import com.PAF.backend.dto.UserDto;
import com.PAF.backend.entity.Users;
import com.PAF.backend.exception.ResourceNotFoundException;
import com.PAF.backend.mapper.UserMapper;
import com.PAF.backend.repository.UserRepository;
import com.PAF.backend.service.UserService;
import lombok.AllArgsConstructor;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;


    @Override
    public UserDto createUser(UserDto userDto) {

        Users users = UserMapper.mapToUser(userDto);
        Users savedUser = userRepository.save(users);

        return UserMapper.mapToUserDto(savedUser);
    }

    @Override
    public UserDto getUserById(Long userId) {
        Users users = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User is noy exist with given id : " + userId));
        return UserMapper.mapToUserDto(users);
    }

    @Override
    public List<UserDto> getAllUser() {
        List<Users> userss = userRepository.findAll();
        return userss.stream().map((users) -> UserMapper.mapToUserDto(users)).collect(Collectors.toList());
    }

    @Override
    public UserDto updateUser(Long userId, UserDto updatedUser) {

        Users users = userRepository.findById(userId).orElseThrow(
                () -> new ResourceNotFoundException("User is not exist with given id : " + userId)
        );

        users.setFirstname(updatedUser.getFirstname());
        users.setLastname(updatedUser.getLastname());
        users.setEmail(updatedUser.getEmail());
        users.setPassword(updatedUser.getPassword());

        Users updatedUserOnj = userRepository.save(users);

        return UserMapper.mapToUserDto(updatedUserOnj);
    }

    @Override
    public void deleteUser(Long userId) {

        Users users = userRepository.findById(userId).orElseThrow(
                () -> new ResourceNotFoundException("User is not exist with given id : " + userId)
        );

        userRepository.deleteById(userId);

    }

    @Override
    public UserDto login(String username, String password) {
        // Find user by username
        Users user = userRepository.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with username: " + username));

        // Validate password
        if (!user.getPassword().equals(password)) {
            throw new ResourceNotFoundException("Incorrect password for username: " + username);
        }

        // If username and password are correct, return the user DTO
        return UserMapper.mapToUserDto(user);
    }

}
