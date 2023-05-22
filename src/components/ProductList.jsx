import React from 'react';

import TabPane from './TabPane';

import '../styles/SectionHeader.scss';
import '../styles/Product.scss'

const ProductList = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-0 gx-5 align-items-end">
                    <div className="col-lg-6">
                        <div className="section-header text-start mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
                            <h1 className="display-5 mb-3">Our Products</h1>
                            <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                        <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                            <li className="nav-item me-2">
                                <a className="btn btn-outline-primary border-2 active" data-bs-toggle="pill" href="#tab-1">Vegetable</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-2">Fruits </a>
                            </li>
                            <li className="nav-item me-0">
                                <a className="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-3">Fresh</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="tab-content">
                    <div id="tab-1" className="tab-pane fade show p-0 active">
                        <TabPane/>
                    </div>
                    <div id="tab-2" className="tab-pane fade show p-0">
                        <TabPane/>
                    </div>
                    <div id="tab-3" className="tab-pane fade show p-0">
                        <TabPane/>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ProductList;