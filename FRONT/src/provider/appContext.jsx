import { useEffect } from "react";
import Service from '../services/index';
import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const service = new Service();

    const [user, setUser] = useState('');
    const [srole , setSrole] = useState('');
    const [isAuth, setIsAuth] = useState(false);
    const [localStorageAuth, setLocalStorageAuth] = useState( localStorage.getItem('isAuth') === 'true' ? true : false);
    const [movies , setMovies] = useState([]);
    const [movie , setMovie] = useState({});
    
    useEffect(() => {
        /* validar si existe el isAuth en el local storage si no setearlo */
        if (localStorage.getItem('isAuth') === null) {
            localStorage.setItem('isAuth', false);
        }
        setLocalStorageAuth(localStorage.getItem('isAuth') === 'true' ? true : false);
    }, []);


    useEffect(() => {
        getItems();
    }, []);
    
    const getItems = async () => {
        const movies = await service.getData('movies');
        console.log('movies', movies);
        setMovies(movies);
    }
    

    return (
        <AppContext.Provider value={{
            user,
            setUser,
            isAuth,
            setIsAuth,
            srole,
            setSrole,
            movies,
            setMovies,
            localStorageAuth,
            setLocalStorageAuth,
            movie,
            setMovie,
            getItems
        }}>
            {children}
        </AppContext.Provider>
    );
}

export { AppContext, AppProvider };