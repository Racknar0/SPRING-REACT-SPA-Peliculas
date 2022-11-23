import React, { useState, useContext } from 'react';
import Service from '../../services/index';
import {AppContext} from '../../provider/appContext';
import { useNavigate } from 'react-router-dom';


const FormLogin = () => {

    const service = new Service();
    const navigate = useNavigate();
    const {setUser, setIsAuth, setSrole} = useContext(AppContext);


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await service.postData('login', { username, password });
        if (user.isAuth === 'false') {
            setIsAuth(false);
            alert('Usuario o contraseña incorrectos');
            return;
        } else {
            alert('Bienvenido');
            setUser(user.username);
            setIsAuth(true);
            setSrole(user.srole);
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
