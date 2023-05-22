import React from 'react';

import NaturalProcess from './FeaturesCards/NaturalProcess';
import BiologicallySafe from './FeaturesCards/BiologicallySafe';
import OrganicProducts from './FeaturesCards/OrganicProducts';

import '../styles/SectionHeader.scss';

const FeatureSection = () => {
    return (
        <div className="container-fluid bg-light bg-icon my-5 py-6">
            <div className="container">
                <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
                    <h1 className="display-5 mb-3">Our Features</h1>
                    <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className="row g-4">
                    <NaturalProcess/>
                    <BiologicallySafe/>
                    <OrganicProducts/>
                </div>
            </div>
        </div>
    );
}

export default FeatureSection;