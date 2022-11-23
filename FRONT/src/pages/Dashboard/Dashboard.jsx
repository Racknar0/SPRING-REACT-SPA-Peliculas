import React, { useContext } from 'react';
import { useEffect } from 'react';
import Service from '../../services/index';
import { AppContext } from '../../provider/appContext'
import CardContainer from '../../components/CardContainer/CardContainer';

const Dashboard = () => {

    const service = new Service();
    const { setMovies } = useContext(AppContext);


    useEffect(() => {
        const getItems = async () => {
            const movies = await service.getData('movies');
            console.log('movies', movies);
            setMovies(movies);
        }
        getItems();
    }, []);

    return (
        <div>
            <header className="pt-5">
                <div className="d-flex justify-content-evenly">
                    <div>
                        <img
                            src="https://1000logos.net/wp-content/uploads/2016/10/apple-emblem.jpg"
                            alt=""
                            width={50}
                            height={50}
                        />
                    </div>
                    <div>
                        <h1 className="text-white">MAJOCADI PLAY</h1>
                    </div>
                    <div>
                        <div className="input-group">
                            <div className="form-outline">
                                <input
                                    type="search"
                                    id="form1"
                                    className="form-control"
                                />
                            </div>
                            <button
                                type="button"
                                className="btn btn-primary"
                                value={'Search'}
                            >
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="btn btn-primary"
                            value={'Login'}
                        >
                            <i className="fas fa-user"></i>
                        </button>
                    </div>
                </div>
            </header>

            <main className="m-5 p-5">
                <CardContainer />
            </main>

            <footer>
                <div className="d-flex justify-content-evenly">
                    <div>
                        <h1 className="text-white">MAJOCADI PLAY</h1>
                    </div>
                    <div>
                        <p className="text-white">About</p>
                        <p className="text-white">Contact</p>
                        <p className="text-white">Privacy Policy</p>
                    </div>
                    <div>
                        <p className="text-white">Terms of Use</p>
                        <p className="text-white">FAQ</p>
                        <p className="text-white">Help</p>
                    </div>
                    <div>
                        <p className="text-white">Follow Us</p>
                        <p className="text-white">Facebook</p>
                        <p className="text-white">Twitter</p>
                        <p className="text-white">Instagram</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Dashboard;
