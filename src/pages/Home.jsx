import React from 'react';

import Carousel from '../components/Carousel';
import AboutSection from '../components/AboutSection';
import FeatureSection from '../components/FeatureSection';
import ProductList from '../components/ProductList';
import FirmVisit from '../components/FirmVisit';
import TestimonialSection from '../components/TestimonialSection';
import BlogSection from '../components/BlogSection';

const Home = () => {
    return (
        <div>
            <Carousel />
            <AboutSection />
            <FeatureSection />
            <ProductList />
            <FirmVisit />
            <TestimonialSection />
            <BlogSection />
        </div>
    );
}

export default Home;