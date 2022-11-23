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
@Table (name="movies")
public class Movies {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;
    @Column(name = "id_movie")
    private String id_movie;
    @Column(name = "name")
    private String name;
    @Column(name = "genre")
    private String genre;
    @Column(name = "description")
    private String description;
    @Column(name = "country")
    private String country;
    @Column(name = "director")
    private String director;
    @Column(name = "image")
    private String image;
    @Column(name = "trailer")
    private String trailer;
    @Column(name = "official_site")
    private String official_site;
    @Column(name = "date")
    private String date;

}
