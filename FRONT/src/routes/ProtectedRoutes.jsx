import React, { useContext, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { AppContext } from '../provider/appContext'

const ProtectedRoutes = ({children}) => {


    const { isAuth,setIsAuth, setLocalStorageAuth, localStorageAuth } = useContext(AppContext);

    useEffect(() => {
        if (localStorage.getItem('isAuth') === 'true') {
            setLocalStorageAuth(true);
            setIsAuth(true);
        }
    }, []);


    if (!isAuth && !localStorageAuth) {
        return <Navigate to="/" />
    }
    return children;



}

export default ProtectedRoutes