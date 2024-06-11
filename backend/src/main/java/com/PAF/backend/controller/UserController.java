package com.PAF.backend.controller;


import com.PAF.backend.dto.UserDto;
import com.PAF.backend.entity.Users;
import com.PAF.backend.service.UserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private final UserService userService;

    @Autowired
    private HttpSession httpSession;

    public UserController(UserService userService) {

        this.userService = userService;
    }

    // Build Add User REST API
    @PostMapping("/register")
    public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto){
        UserDto savedUser = userService.createUser(userDto);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    // Build Get Users by ID REST API
    @GetMapping("{id}")
    public ResponseEntity<UserDto> getUserId(@PathVariable("id") Long userId){
        UserDto userDto = userService.getUserById(userId);
        return ResponseEntity.ok(userDto);
    }

    // Build Get All Users REST API
    @GetMapping
    public ResponseEntity<List<UserDto>> getAllUsers(){
        List<UserDto> users = userService.getAllUser();
        return ResponseEntity.ok(users);
    }

    // Build Update Users REST API
    @PutMapping("{id}")
    public ResponseEntity<UserDto> updateUser(@PathVariable("id") Long userId,@RequestBody UserDto updatedUser){
        UserDto userDto = userService.updateUser(userId, updatedUser);
        return ResponseEntity.ok(userDto);
    }

    // Build Delete User REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") Long userId){
        userService.deleteUser(userId);
        return ResponseEntity.ok("User Deleted Successfully...");
    }

    @PostMapping("/login")
    public ResponseEntity<UserDto> login(@RequestBody Users user, HttpSession session) {
        String username = user.getUsername();
        String password = user.getPassword();

        UserDto loggedInUser = userService.login(username, password);

        // Check if login was successful
        if (loggedInUser != null) {
            // Set user ID in session
            session.setAttribute("userId", loggedInUser.getId());
            return ResponseEntity.ok(loggedInUser);
        } else {
            // Return unauthorized status if login failed
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpSession session) {
        // Invalidate the session by removing the "userId" attribute
        session.removeAttribute("userId");

        // Optionally, you can invalidate the entire session by calling session.invalidate()
        // session.invalidate();

        return ResponseEntity.ok("Logged out successfully");
    }



}
