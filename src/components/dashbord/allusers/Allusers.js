import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Allusers = () => {
    const {data: users =[], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async ()=>{
         const res = await fetch(`https://doctors-protal-server-eight.vercel.app/users`)
         const data = await res.json()
         return data
        }
    })

    const handleMakeadmin = id=>{
        fetch(`https://doctors-protal-server-eight.vercel.app/users/admin/${id}`,{
            method: 'PUT',
            headers: {
                'authrazation': `bearer ${localStorage.getItem('token')}`
              }
        })
        .then(res=>res.json())
        .then(data=>{
            //console.log(data);
            if(data.modifiedCount > 0){
                alert('sucess admin')
                refetch()
            }
        })
    }
    return (
        <div>
            <h2>All Users: </h2>

            <div className="overflow-x-auto">
  <table className="table w-full">

    <thead>
      <tr>
        <td></td>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>
        <th>Delete</th>

      </tr>
    </thead>
    <tbody>
        {
            users.map((d, i) => <tr key={i}>
                <td>{i+1}</td>
                 <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{ d?.role !== 'admin' && <button onClick={()=> handleMakeadmin(d._id)} className='btn-xs btn-primary'>Make admin</button> }</td>
                <td><button className='btn-xs btn-warning'>Delete</button></td>
            </tr>)
        }
      
    </tbody>
  </table>
</div>

        </div>
    );
};

export default Allusers;