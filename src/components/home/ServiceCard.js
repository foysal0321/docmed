import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({data}) => {
    const{info,img,name} = data
    return (
 <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{info}</p>
    <div className="card-actions">
     <Link to='/apporment'>
      <button className="btn btn-primary">Buy Now</button>
     </Link>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;