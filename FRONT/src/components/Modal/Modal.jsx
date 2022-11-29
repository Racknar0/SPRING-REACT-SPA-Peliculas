import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import Service from '../../services/index';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../provider/appContext';


const Modal = ({ children, title, type, id, movie }) => {


    

    const service = new Service();
    const navigate = useNavigate();

    const {getItems} = useContext(AppContext);


    const [idMovie , setIdMovie] = useState('');
    const [nameMovie, setNameMovie] = useState('');
    const [description , setDescription] = useState('');
    const [director, setDirector] = useState('');
    const [genre, setGenre] = useState('');
    const [country, setCountry] = useState('');
    const [date, setDate] = useState('');
    const [image, setImage] = useState('');
    const [official_site, setOfficial_site] = useState('');
    const [trailer, setTrailer] = useState('');
    const [keyMovie, setKeyMovie] = useState('');


    useEffect(() => {
        if (movie) {
            setIdMovie(movie.id_movie);
            setNameMovie(movie.name);
            setDescription(movie.description);
            setDirector(movie.director);
            setGenre(movie.genre);
            setCountry(movie.country);
            setDate( movie.date.slice(0,10));
            setImage(movie.image);
            setOfficial_site(movie.official_site);
            setTrailer(movie.trailer);
            setKeyMovie(movie.id);
        }
    }, [])

    const setAllToAdd = () => {
        setNameMovie('');
        setDescription('');
        setDirector('');
        setGenre('');
        setCountry('');
        setDate('');
        setImage('');
        setOfficial_site('');
        setTrailer('');
    }

    const handleAddMovie = () => {

        if ([nameMovie, description, director, genre, country, date, image, official_site, trailer].includes('')) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'All fields are required!',
            })
            return;
        }

        const movie = {
            id_movie : idMovie,
            name: nameMovie,
            genre : genre,
            description : description,
            country : country,
            director : director,
            image : image,
            trailer : trailer,
            official_site : official_site,
            date : date
        }

        if (type === 'add') {
            service.postData('movies', movie)
            .then(res => {
                if (res.status === 201) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Movie added!',
                        text: 'Movie added successfully!',
                    })
                    getItems();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Movie not added!',
                    })
                }

            })
            return;

        } else if (type === 'update') {
            service.putData('movies', keyMovie , movie)
            .then(res => {
                if (res.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Movie updated!',
                        text: 'Movie updated successfully!',
                    }) 
                    getItems();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Movie not updated!',
                    })
                }
                console.log(res);

            })
            
            return;
        }
    }
        
        
    


    


    return (
        <div
            className="modal fade"
            id={id}
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            {title}
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-1">
                                <label htmlFor="nameMovie" className="form-label" > ID IMDB Movie </label>
                                <input type="text" className="form-control" id="idMovie" value={idMovie} onChange={(e) => setIdMovie(e.target.value)} />
                            </div>
                            <div className="mb-1">
                                <label htmlFor="nameMovie" className="form-label" > Name Movie </label>
                                <input type="text" className="form-control" id="nameMovie" value={nameMovie} onChange={(e) => setNameMovie(e.target.value)} />
                            </div>
                            <div className="mb-1">
                                <label htmlFor="description" className="form-label" > Description </label>
                                <input type="text" className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                            </div>
                            <div className="mb-1">
                                <label htmlFor="director" className="form-label" > Director </label>
                                <input type="text" className="form-control" id="director" value={director} onChange={(e) => setDirector(e.target.value)} />
                            </div>
                            <div className="mb-1"> 
                                <label htmlFor="genre" className="form-label" > Genre </label> 
                                <input type="text" className="form-control" id="genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
                            </div>
                            <div className="mb-1">
                                <label htmlFor="country" className="form-label" > Country </label>
                                <input type="text" className="form-control" id="country" value={country} onChange={(e) => setCountry(e.target.value)} />
                            </div>
                            <div className="mb-1">
                                <label htmlFor="date" className="form-label" > Date </label>
                                <input type="date" className="form-control" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
                            </div>
                            <div className="mb-1">
                                <label htmlFor="image" className="form-label" > Image </label>
                                <input type="text" className="form-control" id="image" value={image} onChange={(e) => setImage(e.target.value)} />
                            </div>
                            <div className="mb-1">
                                <label htmlFor="official_site" className="form-label" > Official Site </label>
                                <input type="text" className="form-control" id="official_site" value={official_site} onChange={(e) => setOfficial_site(e.target.value)} />
                            </div>
                            <div className="mb-1">
                                <label htmlFor="trailer" className="form-label" > Trailer </label>
                                <input type="text" className="form-control" id="trailer" value={trailer} onChange={(e) => setTrailer(e.target.value)} />
                            </div>
                                {/* reseteo */}
                            <button type="button" className="btn btn-danger" onClick={() => setAllToAdd()}>Reset Form</button>

                        </form>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="button" className="btn btn-primary" onClick={() => handleAddMovie()}>
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
