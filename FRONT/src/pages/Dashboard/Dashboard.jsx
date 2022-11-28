import React, { useContext, useEffect } from 'react';

import CardContainer from '../../components/CardContainer/CardContainer';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { AppContext } from '../../provider/appContext';


const Dashboard = () => {

    
    const {srole, setSrole} = useContext(AppContext);

    useEffect(() => {
        setSrole(localStorage.getItem('srole'));
    }, [ setSrole ]);


    return (
        <div>
            <Header />

            <main className="m-5 p-5">
                <CardContainer />
            </main>

            <Footer />
        </div>
    );
};

export default Dashboard;
