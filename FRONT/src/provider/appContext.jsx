import { useEffect } from "react";
import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [user, setUser] = useState('');
    const [srole , setSrole] = useState('');
    const [isAuth, setIsAuth] = useState(true);

    const [movies , setMovies] = useState([]);

    return (
        <AppContext.Provider value={{
            user,
            setUser,
            isAuth,
            setIsAuth,
            srole,
            setSrole,
            movies,
            setMovies
        }}>
            {children}
        </AppContext.Provider>
    );
}

export { AppContext, AppProvider };