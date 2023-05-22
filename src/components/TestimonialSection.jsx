import React from 'react';
import Carousel from 'react-multi-carousel';

import TestimonialItem from './TestimonialItem';

import 'react-multi-carousel/lib/styles.css';
import '../styles/SectionHeader.scss';
import '../styles/Testimonial.scss';

import CustomerProf1 from '../assets/img/testimonial-1.jpg'
import CustomerProf2 from '../assets/img/testimonial-2.jpg'
import CustomerProf3 from '../assets/img/testimonial-3.jpg'
import CustomerProf4 from '../assets/img/testimonial-4.jpg'

const TestimonialSection = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="container-fluid bg-light bg-icon py-6 mb-5">
            <div className="container">
                <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxwidth: '500px' }}>
                    <h1 className="display-5 mb-3">Customer Review</h1>
                    <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <Carousel infinite={true} responsive={responsive} className="testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                    <TestimonialItem customerImage={CustomerProf1} />
                    <TestimonialItem customerImage={CustomerProf2} />
                    <TestimonialItem customerImage={CustomerProf3} />
                    <TestimonialItem customerImage={CustomerProf4} />
                </Carousel>
            </div>
        </div >
    );
}

export default TestimonialSection;