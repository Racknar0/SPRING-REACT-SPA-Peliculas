package com.cinema.minticc4.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cinema.minticc4.model.User;
import com.cinema.minticc4.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User register(User user) {
        return userRepository.save(user);
    }

    public List<User> listarUsers (){
        return this.userRepository.findAll();

    }

    public User validarUser(String nombreUsuario, String passwordUsuario){
       List<User> usuarios = this.userRepository.findAll();
       for (User usuariosobj : usuarios) {
        if (nombreUsuario.equals(usuariosobj.getUsername())) {
            if(passwordUsuario.equals(usuariosobj.getPassword())){
                System.out.println("*********usuario encontrado*************");

                User user = new User();
                user.setUsername(usuariosobj.getUsername());
                user.setSrole(usuariosobj.getSrole());

                return user;
            }
        
        }
       }System.out.println("usuario o contraseña incorrecto");
        return null;
    }

    // public User getDetails(String username) {
    //     return userRepository.findbyusername(username);
    // }

    // public String getStudentRoles(String username) {
    //     return userRepository.findbyusername(username).getSrole();
    // }
}

