import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import InfoCards from './InfoCards';

const Cards = () => {
    const cardData = [
        {
            id:1,
            name: 'Opening House',
            description: 'Open 9.00am to 5.00pm everyday',
            icon: clock,
            bgClass: 'bg-primary'
        },
        {
            id:2,
            name: 'Visit our location',
            description: 'Open 9.00am to 5.00pm everyday',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id:3,
            name: 'Contact us now',
            description: 'Open 9.00am to 5.00pm everyday',
            icon: phone,
            bgClass: 'bg-primary'
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
            {
                cardData.map(data=> <InfoCards
                key={data.id}
                data={data}
                >
                </InfoCards>)
            }
        </div>
    );
};

export default Cards;