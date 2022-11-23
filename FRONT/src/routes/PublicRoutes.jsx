import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AppContext } from '../provider/appContext'

const PublicRoutes = () => {

    const { isAuth } = useContext(AppContext);

    if (!isAuth) {
        return <Navigate to="/" />
    } else {
        return <Navigate to="/dashboard" />
    }



}

export default PublicRoutes