package com.cinema.minticc4.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.cinema.minticc4.model.Movies;

@Repository
public interface MoviesRepository extends JpaRepository <Movies, Integer> {
    
}
