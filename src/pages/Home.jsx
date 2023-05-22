import React from 'react';

import Carousel from '../components/Carousel';
import AboutSection from '../components/AboutSection';
import FeatureSection from '../components/FeatureSection';
import ProductList from '../components/ProductList';
import FirmVisit from '../components/FirmVisit';

const Home = () => {
    return (
        <div>
            <Carousel />
            <AboutSection />
            <FeatureSection />
            <ProductList />
            <FirmVisit />
        </div>
    );
}

export default Home;