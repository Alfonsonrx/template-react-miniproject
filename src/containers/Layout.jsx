import React from 'react';
import Navbar from '../components/Navbar';

import '../styles/global.scss';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            { children }
        </div>
    );
}

export default Layout;