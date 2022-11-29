import React, { useState, useContext, useEffect } from 'react';
import Service from '../../services/index';
import {AppContext} from '../../provider/appContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const FormLogin = () => {


    const service = new Service();
    const navigate = useNavigate();
    const {setUser, setIsAuth, setSrole, setLocalStorageAuth} = useContext(AppContext);



    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await service.postData('login', { username, password });
        console.log("🚀 ** file: FormLogin.jsx ** line 22 ** user", user)

        if (user.data.isAuth === 'false') {
            setIsAuth(false);
            localStorage.setItem('isAuth', false);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Username or password incorrect!',
            })
            return;
        } else {
            setUser(user.data.username);
            localStorage.setItem('user', user.data.username);
            setIsAuth(true);
            localStorage.setItem('isAuth', true);
            setSrole(user.srole);
            localStorage.setItem('srole', user.data.srole);
            await Swal.fire({
                icon: 'success',
                title: 'Welcome!',
                text: 'You are logged in!',
            })

            navigate('/dashboard');
        }
    };

    return (
            <form className='form'>
                <h1>MAJOCADI PLAY LOGIN</h1>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Check me out
                    </label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                    Submit
                </button>
            </form>

    );
};

export default FormLogin;
