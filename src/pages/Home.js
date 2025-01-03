import React from 'react'
import "../design/App.css";
import AboutUs from '../component/AboutUs';
import Article from '../component/Article';
import Demo from '../component/Demo';
const Home = () => {
    return (
        <div>
            <div className='banner_container'>
            </div>
            <div className='title_container'>
                <h1 className='title'>LE BOUQUET</h1>
            </div>
            <AboutUs />

            <Article />
        </div>
    )
}

export default Home