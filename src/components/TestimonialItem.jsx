import React from 'react';

const TestimonialItem = ({customerImage}) => {
    return (
        <div className="testimonial-item position-relative bg-white p-5 mt-4">
            <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5" />
            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
            <div className="d-flex align-items-center">
                <img className="flex-shrink-0 rounded-circle" src={customerImage} alt="Customer Profile" />
                <div className="ms-3">
                    <h5 className="mb-1">Client Name</h5>
                    <span>Profession</span>
                </div>
            </div>
        </div>
    );
}

export default TestimonialItem;