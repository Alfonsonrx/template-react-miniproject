import React from 'react';

import BlogItem from './BlogItem';

import blogFrontPage1 from '../assets/img/blog-1.jpg';
import blogFrontPage2 from '../assets/img/blog-2.jpg';
import blogFrontPage3 from '../assets/img/blog-3.jpg';

import '../styles/SectionHeader.scss';

const BlogSection = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
                    <h1 className="display-5 mb-3">Latest Blog</h1>
                    <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className="row g-4">
                    <BlogItem blogImage={blogFrontPage1}/>
                    <BlogItem blogImage={blogFrontPage2}/>
                    <BlogItem blogImage={blogFrontPage3}/>
                    <div class="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                        <a class="btn btn-primary rounded-pill py-3 px-5" href="/blogs">Load More</a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default BlogSection;