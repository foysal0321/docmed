import React from 'react';

const Review = ({revieww}) => {
    const {img,location,review,name} = revieww
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <p>{review}</p>
    <div className="flex mt-6">
        <div>
      <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={img} />
      </div>
      </div>  
     <div className="mx-6">
        <h5 className='text-1xl'>{name}</h5>
        <p>{location}</p>
     </div>
      </div>
  </div>
</div>
    );
};

export default Review;