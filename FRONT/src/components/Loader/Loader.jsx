import React, { useEffect, useState } from 'react';
import './Loader.css'

const Loader = ({children, timer}) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        setLoading(true);

    }, [])


    
    setTimeout(() => {
        setLoading(false);
    }, timer);

    function Container () {
        return (
            <div className='loader_container'>
            <div className="container">
                <div className="ring"></div>
                <div className="ring"></div>
                <div className="ring"></div>
                <p>Loading...</p>
            </div>
        </div>
        )
    }

    /* retornar children  */

    return (
        <div>
            {loading ? (
                <Container />
            ) : (
                children
            )}
        </div>
    );
};

export default Loader;
