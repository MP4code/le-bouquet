import React from 'react'
import "../design/App.css";
import AboutUs from '../component/AboutUs';
import Article from '../component/Article';
import Demo from '../component/Demo';
import Banner from '../component/Banner';
const Home = () => {
    return (
        <div class="main-container">
            <main>

                <div className='title_container'>
                    <h1 className='title'>LE BOUQUET</h1>
                </div>

                <Banner />
                <AboutUs />
                <Article />
            </main>
        </div>
    )
}

export default Home