import React, { useState } from 'react';
import Loader from '../../components/Loader/Loader';
import Index from '../Index/Index';
import './Main.css';

const Main = () => {
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 3000);

    return <div>{loading ? <Loader /> : <Index />}</div>;
};

export default Main;
