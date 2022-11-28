import React, { useContext } from 'react'
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../provider/appContext'

const PublicRoutes = ({children}) => {

    const { isAuth,setIsAuth, setLocalStorageAuth, localStorageAuth } = useContext(AppContext);

    useEffect(() => {
        if (localStorage.getItem('isAuth') === 'true') {
            setLocalStorageAuth(true);
            setIsAuth(true);
        }
    }, []);


    if (isAuth && localStorageAuth) {
        return <Navigate to="/dashboard" />
    }
    return children;



}

export default PublicRoutes