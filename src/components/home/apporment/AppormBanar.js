import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppormBanar = ({selected, setSelected}) => {
    
    return (
       <header>
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://www.birkovaproducts.com/product_images/uploaded_images/surgery-room.png" className="max-w-sm lg:w-1/2 rounded-lg shadow-2xl" />
                <div className='mr-6'>
                <DayPicker 
                mode='single'
                selected={selected}
                onSelect={setSelected}
                />
                </div>
            </div>
         </div>
       </header>
    );
};

export default AppormBanar;