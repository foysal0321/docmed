import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/share/Footer'
import Navbar from '../components/share/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;