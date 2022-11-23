package com.cinema.minticc4.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

    public List<User> listarUsers() {
        return this.userRepository.findAll();
    }

    public ResponseEntity<?> validarUser(String nombreUsuario, String passwordUsuario) {
        List<User> usuarios = this.userRepository.findAll();
        for (User usuariosobj : usuarios) {
            if (nombreUsuario.equals(usuariosobj.getUsername())) {
                if (passwordUsuario.equals(usuariosobj.getPassword())) {

                    String username = usuariosobj.getUsername();
                    String srole = usuariosobj.getSrole();
                    Boolean isAuth = true;
                    return ResponseEntity.ok()
                            .body("{ \"username\": \"" + username + "\", \"srole\": \"" + srole + "\", \"isAuth\": \""
                                    + isAuth + "\" }");
                }
            }
        }
        System.out.println("usuario o contraseña incorrecto");
        return ResponseEntity.ok().body("{ \"isAuth\": \"false\" }");
    }
}
