package com.cinema.minticc4.controller;
import com.cinema.minticc4.model.User;
import com.cinema.minticc4.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
public class UserController {
@Autowired
    private UserService userService;






    // private PasswordEncoder encoder;

    // public UserController(UserService service, PasswordEncoder encoder) {
    //     this.userService = service;
    //     this.encoder = encoder;
    // }

    /**
    //  * Any user can access this API - No Authentication required
    //  * @param student
    //  * @return
    //  */

    // @PostMapping("/register")
    // public User registerStudent(@RequestBody User user) {
    //     User user1 = new User();
    //     user1.setUsername(user.getUsername());
    //     user1.setPassword(encoder.encode(user.getPassword()));
    //     user1.setSrole(user.getSrole());
    //     return userService.register(user1);
    // }s

    /**
    //  * User who has logged in successfully can access this API
    //  * @param username
    //  * @return
    //  */

    // @GetMapping
    // public List <User> getuser (){
    //     System.out.println("ejecutando");
    //     userService.validarUser();
    //     return userService.listarUsers();
    // }

    @GetMapping ("/login")
    public ResponseEntity<?> login(@RequestBody User user){
        System.out.println("***************************************************");
        System.out.println(user);
        System.out.println("***************************************************");
        String nombreUsuario = user.getUsername();
        String passwordUsuario = user.getPassword();
        if (userService.validarUser(nombreUsuario, passwordUsuario)==null){
            return new ResponseEntity<>("usuario o contraseña incorrecta", HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok().body(this.userService.validarUser(nombreUsuario, passwordUsuario));
        
    }

    
    // @GetMapping("/studentInfo")
    // public User getStudentInfo(@RequestParam("username") String username) {
    //     return userService.getDetails(username);
    // }

    // /**
    //  * User who has the role ROLE_WRITE can only access this API
    //  * @param username
    //  * @return
    // //  */
    // @GetMapping("/getStudentRoles")
    // public String getStudentRoles(@RequestParam("username") String username) {
    //     return userService.getStudentRoles(username);
    // }

    
}