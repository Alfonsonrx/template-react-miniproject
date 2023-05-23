import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './containers/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Blogs from './pages/Blogs';
import Features from './pages/Features';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Page404 from './pages/Page404';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/features" element={<Features />} />
          <Route exact path="/reviews" element={<Reviews />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
