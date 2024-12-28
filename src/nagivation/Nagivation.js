import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Product from "../pages/Product.js";
import Contact from "../pages/Contact.js";
import Header from '../layout/Header.js';
import Footer from '../layout/Footer.js';
import Home from '../pages/Home.js';

const Nagivate = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/contact' element={<Contact />} />
                <Route exact path='/p' element={<Product />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Nagivate