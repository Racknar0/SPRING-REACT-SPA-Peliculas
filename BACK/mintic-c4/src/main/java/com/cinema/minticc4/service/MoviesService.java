package com.cinema.minticc4.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cinema.minticc4.model.Movies;
import com.cinema.minticc4.repository.MoviesRepository;

@Service
public class MoviesService {
    @Autowired
    private MoviesRepository moviesRepository;

    public Movies guardarMovie(Movies movies){
        return this.moviesRepository.save(movies);
    }

    public void borrarMovie(Integer id){
        moviesRepository.deleteById(id);
    }

    public Optional<Movies> obtenerMoviesbyId(Integer id){
        return moviesRepository.findById(id);
        }

    public List<Movies> obtenerMovies() {
        return moviesRepository.findAll();
            } 

    public Integer editarMovies(Integer id, Movies movies) {
        Movies moviesactual = moviesRepository.findById(id).get();
            BeanUtils.copyProperties(movies, moviesactual, "id");
                 moviesRepository.save(moviesactual);
                 return id;
            }

}
