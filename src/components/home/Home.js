import React from 'react';
import Apporment from './Apporment';
import Bannar from './Bannar';
import Cards from './Cards';
import InfoCards from './InfoCards';
import Services from './Services';
import Testimonil from './testimoniel/Testimonil';

const Home = () => {
    return (
        <div className='mx-5'>
            <Bannar />
            <Cards />
            <Services />
            <Apporment />
            <Testimonil />
        </div>
    );
};

export default Home;