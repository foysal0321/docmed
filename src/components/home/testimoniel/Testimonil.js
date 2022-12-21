import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import img1 from '../../../assets/images/people1.png'
import img2 from '../../../assets/images/people2.png'
import img3 from '../../../assets/images/people3.png'
import Review from './Review';


const Testimonil = () => {
    const reviews = [
        {
            id: 1,
            name: 'Winsoy Harry',
            img: img1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            id: 2,
            name: 'Winsoy Harry',
            img: img2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            id: 3,
            name: 'Winsoy Harry',
            img: img3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
    ]
    return (
        <section className='my-16'>
            <div className="flex justify-between">
                <div className="">
                    <h3 className='text-3xl text-primary'>Testimonial</h3>
                </div>                       
            <figure>
                <img src={quote} className='w-24 lg:w-48' alt="" />
            </figure>
              </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                {
                    reviews.map(re => <Review
                    key={re.id}
                    revieww={re}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonil;