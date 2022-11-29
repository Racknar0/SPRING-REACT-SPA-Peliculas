import React, { useContext } from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../provider/appContext';
import Service from '../../services/index';
import Swal from 'sweetalert2'
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

const Card = ({movie}) => {

    const service = new Service();
    const navigate = useNavigate();
    const {srole,getItems } = useContext(AppContext);

    const showMore = (id) => {
        navigate(`/details/${id}`);
    }

    const deleteMovie = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            showDenyButton: true,
            /* showCancelButton: true, */
            confirmButtonText: 'Yes',
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                service.deleteData('movies', id)
                .then(response => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Movie deleted',
                        text: 'The movie has been deleted!',
                    })
                    getItems();
                })
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })



        
    }

    const editMovie = (movie) => {
        
        return (
            <Modal title={'Update Movie From Database' + movie.name} type={'add'} id={'update_movie'}  movie={movie} />
        )
    }



    return (
        <div className='col-12 col-md-6 col-lg-4 col-xl-3 mb-2'>
            <div className='d-flex flex-column align-items-center'>
                <div className="card mt-4">
                    <div className="card2" onClick={() => showMore(movie.id)}>
                        <img
                            src={movie.image}
                            alt="iterstellar"
                        />
                    </div>
                </div>
                <h3 className='text-white text-center mt-2'>{movie.name}</h3>
                <div className='d-flex'>
                    
                    {
                        srole === 'admin' &&
                        <>
                        {/* <button data-bs-toggle="modal" data-bs-target="#update_movie" type="button" className="btn btn-warning  me-2">
                            Update
                        </button> */}

                        <button type="button" className="btn btn-warning me-4" data-bs-toggle="modal" data-bs-target={`#modal_${movie.id}`} /* onClick={() => {
                                editMovie(movie)
                            }} */
                            >
                                Update
                        </button>

                        <button type="button" className="btn btn-danger" onClick={() => {
                            deleteMovie(movie.id)
                        }}>
                            Delete
                        </button>
                        <div>
                        
                        </div>
                            {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#modal_${movie.id}`} 
                        >
                                Show More
                        </button> */}
                        
                        <Modal title={`Update Movie From Database ${movie.name}`} type={'update'} id={`modal_${movie.id}`} movie={movie}  />
                        </>

                    }
                </div>

            </div>
        </div>
    );
};

export default Card;
