package com.cinema.minticc4.controller;
import com.cinema.minticc4.model.Movies;
import com.cinema.minticc4.service.MoviesService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/movies")
@RestController 
public class MoviesController {
    @Autowired
    private MoviesService moviesService;


    @GetMapping
    public List<Movies> obtenerpelis() {
      return moviesService.obtenerMovies();
  }
    
  @GetMapping ("/{id}")
    public Optional<Movies> obtenerpacienteporid(@PathVariable Integer id) {
      return moviesService.obtenerMoviesbyId(id);
  }

@DeleteMapping ("/{id}")
public ResponseEntity<Movies> borrarMovie(@PathVariable Integer id){
  moviesService.borrarMovie(id);
      return new ResponseEntity<>(HttpStatus.OK);

}

@PostMapping
public ResponseEntity<Movies> guardarusuario(@RequestBody  Movies movies){
        Movies pelicula = moviesService.guardarMovie(movies);
        return new ResponseEntity<Movies>(pelicula, HttpStatus.CREATED);

} 

@PutMapping("/{id}")
public Integer editarusuario(@PathVariable("id") Integer id, @RequestBody Movies movies){
    return moviesService.editarMovies(id, movies);
} 
    // public ResponseEntity<?> findallmovies(@PathVariable (name="id")Integer id){
    //     if (this) {
            
    //     }
    // }
}
