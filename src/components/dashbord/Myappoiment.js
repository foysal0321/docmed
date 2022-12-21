import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/Authcontext';

const Myappoiment = () => {
    const {user } = useContext(AuthContext);

    const url = `https://doctors-protal-server-eight.vercel.app/bookings?email=${user?.email}`;

    const {data: bookings = []} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async ()=> {
            const res = await fetch(url,{
              headers: {
                'authrazation': `bearer ${localStorage.getItem('token')}`
              }
            })
            const data = await res.json()
            return data;
        }
    })

    return (
        <div>
            <h1 className='text-3xl text-center'>My Appoiment</h1>
            <div className="overflow-x-auto mt-5">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Traatment</th>
        <th>Date</th>
        <th>Time</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
        {
            bookings.map((d,i)=> <tr key={i}>
             <th>{i+1}</th>
              <td>{d.patient}</td>
              <td>{d.treatment}</td>
              <td>{d.appoimentDate}</td>
              <td>{d.slot}</td>
              <td>              

              {
                d.price && !d.paid && <Link to={`/dashboard/payment/${d._id}`}>
                <button className='btn btn-sm'>pay</button>
                </Link>
              }
              {
                d.price && d.paid && <span className='text-primary'>paid</span>
              }

              </td>
            </tr>)
        }

  

    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default Myappoiment;