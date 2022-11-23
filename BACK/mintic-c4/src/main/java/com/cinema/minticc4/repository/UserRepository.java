package com.cinema.minticc4.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cinema.minticc4.model.User;


@Repository
public interface UserRepository extends JpaRepository <User, Long> {
    // Optional<User> findByUsername(String username);
//    public User findbyusername (String username);

    // Boolean existsByUsername(String username);
}
