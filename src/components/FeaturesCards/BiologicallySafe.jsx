import React from 'react';

import iconFeat2 from '../../assets/img/icon-2.png';

const BiologicallySafe = () => {
    return (
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="bg-white text-center h-100 p-4 p-xl-5">
                <img className="img-fluid mb-4" src={iconFeat2} alt='icon 2' />
                <h4 className="mb-3">Organic Products</h4>
                <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href='/'>Read More</a>
            </div>
        </div>
    );
}

export default BiologicallySafe;