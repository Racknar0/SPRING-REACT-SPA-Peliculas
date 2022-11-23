import React, { useState } from 'react';
import FormLogin from '../../components/FormLogin/FormLogin';
import Loader from '../../components/Loader/Loader';
import './Login.css';

const Login = () => {
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 3000);

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <div className="container_login">
                    <FormLogin />
                </div>
            )}
        </div>
    );
};

export default Login;
