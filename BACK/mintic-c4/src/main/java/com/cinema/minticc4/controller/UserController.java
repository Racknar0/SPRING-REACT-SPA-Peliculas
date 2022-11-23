package com.cinema.minticc4.controller;
import com.cinema.minticc4.model.User;
import com.cinema.minticc4.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class UserController {
@Autowired
    private UserService userService;

    @PostMapping ("/login")
    public ResponseEntity<?> login(@RequestBody User user){
        String nombreUsuario = user.getUsername();
        String passwordUsuario = user.getPassword();
        return this.userService.validarUser(nombreUsuario, passwordUsuario);
    }
}