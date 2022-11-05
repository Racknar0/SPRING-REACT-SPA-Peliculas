import React from 'react';
import './Loader.css'

const Loader = () => {
    return (
        <div className='loader_container'>
            <div className="container">
                <div className="ring"></div>
                <div className="ring"></div>
                <div className="ring"></div>
                <p>Loading...</p>
            </div>
        </div>
    );
};

export default Loader;
