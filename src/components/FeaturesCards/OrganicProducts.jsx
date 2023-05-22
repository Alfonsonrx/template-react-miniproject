import React from 'react';

import iconFeat3 from '../../assets/img/icon-3.png';

const OrganicProducts = () => {
    return (
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="bg-white text-center h-100 p-4 p-xl-5">
                <img className="img-fluid mb-4" src={iconFeat3} alt='icon 3' />
                <h4 className="mb-3">Biologically Safe</h4>
                <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href='/'>Read More</a>
            </div>
        </div>
    );
}

export default OrganicProducts;