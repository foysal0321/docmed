import React from 'react';
import doctor from '../../assets/images/doctor.png'
import apporment from '../../assets/images/appointment.png'


const Apporment = () => {

    return (
        <section className='mt-32 py-5' 
        style={
            { 
                background : `url(${apporment})`
            }
        }
        >     
 <div className="hero ">
  <div className="hero-content flex-col lg:flex-row text-white">
    <img src={doctor} className="lg:w-1/2 -mt-52 hidden lg:block rounded-lg shadow-2xl" />
    <div>
    <h1 className="text-2xl font-bold text-primary">Apporment</h1>
      <h1 className="text-5xl font-bold">Make an appointment Today</h1>
      <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div> 
</section>
    );
};

export default Apporment;