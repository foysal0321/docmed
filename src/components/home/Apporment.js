import React from 'react';
import doctor from '../../assets/images/doctor.png'
import apporment from '../../assets/images/appointment.png'
import './Style.css'


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
  <div className=" makean hero-content flex-col lg:flex-row text-white">
    <img src='https://media.istockphoto.com/id/1161336374/photo/portrait-of-confident-young-medical-doctor-on-blue-background.jpg?s=612x612&w=0&k=20&c=zaa4MFrk76JzFKvn5AcYpsD8S0ePYYX_5wtuugCD3ig=' className="lg:w-96  -ml-4  hidden lg:block  shadow-2xl" />
    <div>
    <h1 className="text-2xl font-bold text-primary py-5">Apporment</h1>
      <h1 className="text-5xl font-bold">Make an appointment Today</h1>
      <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <button className="btn btn-primary text-white">Get Apporment</button>
    </div>
  </div>
</div> 
</section>
    );
};

export default Apporment;