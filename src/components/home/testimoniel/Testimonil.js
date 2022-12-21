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
            img: "https://media.istockphoto.com/id/92347250/photo/portrait-of-a-doctor.jpg?s=612x612&w=0&k=20&c=yKBhDy7ch065QV8mE4ocec8n9uec9VmBDmT137ZjHFo=",
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            id: 2,
            name: 'Winsoy Harry',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxKKNSOH53FJO8z8HF3ABcGngdQveqfyAUjfu0_W6XTONj9FG2Uo8YXdKu5Thhi6xTiYg&usqp=CAU',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            id: 3,
            name: 'Winsoy Harry',
            img:'https://profrea.com/blog/wp-content/uploads/2022/04/10.jpg',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
    ]
    return (
        <section className='my-16'>
            <div className="flex justify-between">
                <div className="">
                    <h3 className='text-3xl text-primary'>DOCTORS</h3>
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