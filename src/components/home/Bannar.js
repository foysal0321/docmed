import React from 'react';
import chair from '../../assets/images/chair.png'

const Bannar = () => {
    return (
        <div className="hero ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://t4.ftcdn.net/jpg/03/20/52/31/360_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg" className="w-1/2 rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Healt Care <br /> For Holy Family</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Bannar;