import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/Authcontext';

const Modal = ({modal, selected, setmodal, refetch}) => {
    const {user} = useContext(AuthContext)
    const {name, slots, _id, price} = modal
    const date = format(selected, 'PP');

    const handleBooking=(e)=>{
        e.preventDefault()
        const from = e.target;
        const slot = from.slot.value;
        const pname = from.name.value;
        const email = from.email.value;
        const phone = from.phone.value;
        //const price = from.price.value;

        const booking ={
            appoimentDate : date,
            treatment: name,
            patient: pname,
            slot,
            email,
            phone,
           price
        }
        fetch(`https://doctors-protal-server-eight.vercel.app/bookings`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{         
            if(data.acknowledged){
                 alert('success bokking')
                setmodal(null)
                refetch()
            }
            else{
                alert(data.message)
            }
           
        })
        
        
        //console.log(booking);
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
         <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">{name}</h3>
                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                <input type="text" disabled value={date} className="input input-bordered w-full " />
                <select name='slot' className="select select-bordered w-full">               
                    {
                        slots.map(slot=>  <option key={slot} value={slot}>{slot}</option>)
                    }
                    </select>
                <input name='name' readOnly defaultValue={user?.displayName} type="text" placeholder="Your name" className="input input-bordered w-full " />
                <input name='email' readOnly value={user?.email} type="email" placeholder="Your email" className="input input-bordered w-full " />
                {/* <input name='price' readOnly value={`$${price}`} type="text" className="input input-bordered w-full " /> */}
                <input name='phone' type="number" placeholder="Your phone" className="input input-bordered w-full " /> 
                <input type="submit" value="Submit" className=' w-full btn btn-accent'/>
                </form>
            </div>
            </div>
        </>
    );
};

export default Modal;