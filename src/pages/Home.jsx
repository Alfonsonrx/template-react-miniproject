import React from 'react';

import Carousel from '../components/Carousel';
import AboutSection from '../components/AboutSection';
import FeatureSection from '../components/FeatureSection';
import ProductList from '../components/ProductList';

const Home = () => {
    return (
        <div>
            <Carousel />
            <AboutSection />
            <FeatureSection />
            <ProductList />
        </div>
    );
}

export default Home;