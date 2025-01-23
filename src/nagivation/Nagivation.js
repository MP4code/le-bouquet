import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Product from "../pages/Product.js";
import Contact from "../pages/Contact.js";
import Header from '../layout/Header.js';
import Footer from '../layout/Footer.js';
import Home from '../pages/Home.js';
import Error404 from '../pages/Error404.js';
import PageCadeaux from '../pages/PageCadeaux.js';
import Delivery from '../pages/Delivery.js';

const Nagivate = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/Cadeaux' element={<PageCadeaux />} />
                <Route exact path='/contact' element={<Contact />} />
                <Route exact path='/livraison' element={<Delivery />} />
                <Route exact path='/bouquet/:ref' element={<Product />} />
                <Route path='/error-404' element={<Error404 />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Nagivate