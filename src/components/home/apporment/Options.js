import React from 'react';

const Options = ({data, setmodal}) => {
    const {_id, slots, name, price} = data
    return (
        <section>
            <div className="card w-96 shadow-xl ">
            <div className="card-body text-center mt-10">
                <h2 className="text-2xl font-bold text-primary text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try anather day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} aviable</p>
                <h1>Price: ${price}</h1>
                <div className="card-actions justify-center">
                <label onClick={()=> setmodal(data)}
                disabled={slots.length === 0}
                 htmlFor="booking-modal"
                  className="btn btn-primary text-white"
                  >Book Appoinment</label>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Options;