import React from 'react';

import ProductList from '../components/ProductList';
import FirmVisit from '../components/FirmVisit';
import TestimonialSection from '../components/TestimonialSection';

import '../styles/Header.scss';
import '../styles/Product.scss';

const Products = () => {
    return (
        <div>
            {/* Page Header Start */}
            <div className="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <h1 className="display-3 mb-3 animated slideInDown">Products</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a className="text-body" href="/">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-body" href="/">Pages</a></li>
                            <li className="breadcrumb-item text-dark active" aria-current="page">Products</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
            <ProductList />
            <FirmVisit />
            <TestimonialSection />
        </div>
    );
}

export default Products;