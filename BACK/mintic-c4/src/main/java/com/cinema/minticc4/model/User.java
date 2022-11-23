package com.cinema.minticc4.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString


@Entity
@Table (name="login")
public class User {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int user_id;
    @Column(name = "username")
    private String username;
    @Column(name = "password")
    private String password;
    @Column(name = "roles")
    private String srole;
    
    // public String getusername(){
    //     return username;
    // }
}


