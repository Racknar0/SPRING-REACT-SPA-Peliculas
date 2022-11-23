import React from 'react';
import './Card.css';

const Card = ({movie}) => {

    const showMore = (id) => {
        console.log(id);
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
                <button type="button" className="btn btn-primary" onClick={() => {
                    showMore(movie.id)
                }}>
                    Show more
                </button>
            </div>
        </div>
    );
};

export default Card;
