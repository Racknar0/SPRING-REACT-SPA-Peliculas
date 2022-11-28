import React, { useState } from 'react';
import FormLogin from '../../components/FormLogin/FormLogin';
import Loader from '../../components/Loader/Loader';
import './Login.css';

const Login = () => {

    return (
        <div>
            <Loader timer={3000}>
                 <div className="container_login">
                    <FormLogin />
                </div>
            </Loader>
        </div>
    );
};

export default Login;
