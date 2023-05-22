import React from 'react';

import ProductItem from './ProductItem';

import productImage1 from '../assets/img/product-1.jpg';
import productImage2 from '../assets/img/product-2.jpg';
import productImage3 from '../assets/img/product-3.jpg';
import productImage4 from '../assets/img/product-4.jpg';
import productImage5 from '../assets/img/product-5.jpg';
import productImage6 from '../assets/img/product-6.jpg';
import productImage7 from '../assets/img/product-7.jpg';
import productImage8 from '../assets/img/product-8.jpg';

const TabPane = () => {
    return (
        <div className="row g-4">
            <ProductItem prodimage={productImage1} />
            <ProductItem prodimage={productImage2} />
            <ProductItem prodimage={productImage3} />
            <ProductItem prodimage={productImage4} />
            <ProductItem prodimage={productImage5} />
            <ProductItem prodimage={productImage6} />
            <ProductItem prodimage={productImage7} />
            <ProductItem prodimage={productImage8} />
            <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.01s">
                <a className="btn btn-primary rounded-pill py-3 px-5" href="/">Browse More Products</a>
            </div>
        </div>
    );
}

export default TabPane;