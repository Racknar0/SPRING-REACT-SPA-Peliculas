import React, { useContext } from 'react'
import { AppContext } from '../../provider/appContext';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import './Header.css';
import ReactTooltip from "react-tooltip";

import Logo from '../../assets/logo.png';
import Modal from '../Modal/Modal';

function Tooltip({user, srole}) {
    return (
      <div >
            <button
                type="button"
                className="btn btn-primary"
                value={'profile'}
                data-tip="profile"
                data-for="profile"
            >
                <i className="fas fa-user"></i>Profile
            </button>
  
            <ReactTooltip id="profile" place="bottom" effect="solid">
                <div className='pt-2 pb-2'>
                    <p className='mb-0'><span className='fw-bold'>Username:</span> {localStorage.getItem('user')}</p>
                    <p className='mb-0'><span className='fw-bold'>Role:</span> {localStorage.getItem('srole')}</p>
                </div>
            </ReactTooltip>
      </div>
    );
  }



const Header = () => {
    
    const navigate = useNavigate();
    const { setIsAuth, setLocalStorageAuth, user, srole } = useContext(AppContext);

    const handleLogout = async () => {
        localStorage.setItem('isAuth', false);
        localStorage.setItem('user', '');
        localStorage.setItem('srole', '');
        setLocalStorageAuth(false);
        setIsAuth(false);
        await Swal.fire({
            title: 'Closing session',
            text: 'You are logged out!',
            icon: 'success',
            confirmButtonText: 'Ok'
        })
        await navigate('/');

    }  

  return (
    <>
    <header className="pt-5 w-100 d-flex flex-column align-items-center justify-content-center">
                <nav>
                    <div className="me-4">
                        <a href="/">
                            <img
                                src={Logo}
                                alt=""
                                width={140}
                                height={40}
                                
                            />
                        </a>
                    </div>
                    <div className="me-4">
                        
                    <Tooltip user={user} srole={srole}/>
                    </div>
                    <div className="me-4">
                            <button
                                type="button"
                                className="btn btn-primary align-self-end-0"
                                value={'Logout'}
                                onClick={handleLogout}
                            >
                                <i className="fa fa-sign-out"></i>Logout
                            </button>
                    </div>
                </nav>
                {
                    (localStorage.getItem('srole') === 'admin') ? (
                    <div>
                        <button  data-bs-toggle="modal" data-bs-target="#modal_add" className='mt-3 btn btn-success'>+ ADD MOVIE</button>
                    </div>
                    ) : null
                }
            </header>
            <Modal title={'Add Movie to Database'} type={'add'} id={'modal_add'}  />


            </>
  )
}

export default Header