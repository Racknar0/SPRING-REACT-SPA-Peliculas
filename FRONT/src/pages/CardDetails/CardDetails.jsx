import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Service from '../../services/index';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { AppContext } from '../../provider/appContext';

import './CardDetails.css';

const CardDetails = () => {

    const service = new Service();

    const { id } = useParams();
    const { movies , setMovies, movie, setMovie } = useContext(AppContext);
    

    

    useEffect(() => {
        const getItems = async () => {
            const movies = await service.getData('movies');
            await setMovies(movies);
            setMovie(movies.find(movie => movie.id === parseInt(id)));
            console.log("🚀 ** file: CardDetails.jsx ** line 16 ** movie", movie)
        }
        getItems();
    }, []);


    return (
        <div>
            <Header />

            <main className="m-5 p-5">
                    <h1 className='text-white text-center'>Movie Details</h1>
                    <div className='movie_details_container m-auto p-3'>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <img className='w-100' src={movie.image} alt={movie.name} />
                            </div>
                            <div className='col-12 col-md-6'>
                                <h2 className='text-black text-center'>{movie.name}</h2>
                                <p className='text-black'><span className='fw-bold'>Sinopsis: </span>{movie.description}</p>
                                <p className='text-black'><span className='fw-bold'>Director: </span>{movie.director}</p>
                                <p className='text-black'><span className='fw-bold'>Genre: </span>{movie.genre}</p>
                                <p className='text-black'><span className='fw-bold'>ID IMDB: </span>{movie.id_movie}</p>
                                <p className='text-black'><span className='fw-bold'>Official Site: </span><a href={movie.official_site}>{movie.official_site}</a></p>
                                <p className='text-black'><span className='fw-bold'>Tailer: </span></p>
                                <iframe width="400px" height="250px" src={movie.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                            </div>

                            
                        </div>
                    </div>
            </main>

            <Footer />
        </div>
    );
};

export default CardDetails;
