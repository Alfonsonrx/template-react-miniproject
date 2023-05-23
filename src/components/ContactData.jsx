import React from 'react';

const ContactData = () => {
    return (
        <div className="col-lg-5 col-md-12 wow fadeInUp" data-wow-delay="0.1s">
            <div className="bg-primary text-white d-flex flex-column justify-content-center h-100 p-5">
                <h5 className="text-white">Call Us</h5>
                <p className="mb-5"><i className="fa fa-phone-alt me-3" />+012 345 67890</p>
                <h5 className="text-white">Email Us</h5>
                <p className="mb-5"><i className="fa fa-envelope me-3" />info@example.com</p>
                <h5 className="text-white">Office Address</h5>
                <p className="mb-5"><i className="fa fa-map-marker-alt me-3" />123 Street, New York, USA</p>
                <h5 className="text-white">Follow Us</h5>
                <div className="d-flex pt-2">
                    <a className="btn btn-square btn-outline-light rounded-circle me-1" href="/"><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square btn-outline-light rounded-circle me-1" href="/"><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square btn-outline-light rounded-circle me-1" href="/"><i className="fab fa-youtube" /></a>
                    <a className="btn btn-square btn-outline-light rounded-circle me-0" href="/"><i className="fab fa-linkedin-in" /></a>
                </div>
            </div>
        </div>
    );
}

export default ContactData;