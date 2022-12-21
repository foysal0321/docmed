import React from 'react';

const InfoCards = ({data}) => {
    const {icon,name,description,bgClass} = data
    return (
        <div className={`card card-side ${bgClass} shadow-xl px-6 text-white`}>
  <figure><img src={icon} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
  </div>
</div>
    );
};

export default InfoCards;