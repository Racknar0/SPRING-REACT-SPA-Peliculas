import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { AppContext } from '../provider/appContext'

const ProtectedRoutes = () => {


    const { isAuth } = useContext(AppContext);
    console.log('isAuth', isAuth);

    if (isAuth) {
        return <Navigate to="/dashboard" />
    }
    return <Navigate to="/" />



}

export default ProtectedRoutes