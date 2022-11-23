import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AppContext } from '../provider/appContext'

const PublicRoutes = ({children}) => {

    const { isAuth } = useContext(AppContext);

    if (isAuth) {
        return <Navigate to="/dashboard" />
    }
    return children;



}

export default PublicRoutes