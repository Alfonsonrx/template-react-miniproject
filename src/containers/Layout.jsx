import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../styles/global.scss';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            { children }
            <Footer />
            <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up" /></a>
        </div>
    );
}

export default Layout;