import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const Services = () => {
    const servicedata = [
        {
            id:1,
            name : 'Fluoride Treatment',
            info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae praesentium libero reprehenderit laudantium error et quasi deleniti',
            img: fluoride,
        },
        {
            id:2,
            name: 'Cavity Filling',
            info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae praesentium libero reprehenderit laudantium error et quasi deleniti',
            img: cavity,
        },
        {
            id:3,
            name: 'Teeth Whitening',
            info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae praesentium libero reprehenderit laudantium error et quasi deleniti',
            img: whitening,
        },
    ]
    return (
        <div  className=''>
            <div className="text-center">
            <h3 className='text-2xl uppercase text-primary'>Our Services</h3>
            <h2 className='text-4xl'>Services we Provide</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                {
                    servicedata.map(data=> <ServiceCard
                    key={data.id}
                    data={data}
                    ></ServiceCard>)
                }
            </div>
            
        </div>
    );
};

export default Services;