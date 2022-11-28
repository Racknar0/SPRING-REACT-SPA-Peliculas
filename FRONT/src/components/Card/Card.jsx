import React, { useContext } from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../provider/appContext';
import Service from '../../services/index';
import Swal from 'sweetalert2'

const Card = ({movie}) => {

    const service = new Service();
    const navigate = useNavigate();
    const {srole,getItems } = useContext(AppContext);

    const showMore = (id) => {
        navigate(`/details/${id}`);
    }

    const deleteMovie = (id) => {
        service.deleteData('movies', id)
            .then(response => {
                Swal.fire({
                    icon: 'success',
                    title: 'Movie added!',
                    text: 'Movie added successfully!',
                })
                getItems();
            })
    }




    return (
        <div className='col-12 col-md-6 col-lg-4 col-xl-3 mb-2'>
            <div className='d-flex flex-column align-items-center'>
                <div className="card mt-4">
                    <div className="card2">
                        <img
                            src={movie.image}
                            alt="iterstellar"
                        />
                    </div>
                </div>
                <h3 className='text-white text-center'>{movie.name}</h3>
                <div className='d-flex'>
                    <button type="button" className="btn btn-primary me-1" onClick={() => {
                        showMore(movie.id)
                    }}>
                        More
                    </button>
                    {
                        srole === 'admin' &&
                        <>
                        <button type="button" className="btn btn-danger me-1" onClick={() => {
                            deleteMovie(movie.id)
                        }}>
                            Delete
                        </button>
                        <button type="button" className="btn btn-warning" onClick={() => {
                            deleteMovie(movie.id)
                        }}>
                            Edit
                        </button>
                        </>

                    }
                </div>

            </div>
        </div>
    );
};

export default Card;
