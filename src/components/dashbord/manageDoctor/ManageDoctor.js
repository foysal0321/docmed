import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ConfirmModal from '../../share/confrimModal/ConfirmModal';

const ManageDoctor = () => {
    const [deletDoctor,setdeletDoctor] = useState(null);

    const closeModal=()=>{
        setdeletDoctor(null)
    }

    const {data: doctors=[], isLoading, refetch} = useQuery({
        queryKey: ['doctors'],
        queryFn: async ()=>{
            try{
            const res = await fetch(`https://doctors-protal-server-eight.vercel.app/doctors`,{            
                headers: {
                    'authrazation': `bearer ${localStorage.getItem('token')}`
                }
            })
            const data = await res.json()
            return data;
            }
            catch{

            }
           
        }
    })
    if(isLoading){
        return <progress className="progress w-56"></progress>
    }

     const deleteSucess=(doctor)=>{
        fetch(`https://doctors-protal-server-eight.vercel.app/doctors/${doctor._id}`,{
            method: 'DELETE',
            headers: {
                'authrazation': `bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount > 0){
                alert('delete sucess')
                refetch()
            }
           // console.log(data);
            
        })
        
    }

    return (
        <div>
            <h2>Doctors Manage : {doctors.length}</h2>
            <div className="overflow-x-auto mt-5">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Avataer</th>
        <th>Name</th>    
        <th>Email</th>
        <th>Spcility</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>

        {
            doctors.map((d,i)=> <tr key={i}>
             <th>{i+1}</th>
              <td>
               <div className="avatar">
                 <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={d.image} />
                 </div>
                </div>
              </td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.specility}</td>
              <td>
              <label onClick={()=> setdeletDoctor(d)} htmlFor="confrim-modal" className="btn btn-xs btn-secondary">Delete</label>
                
                </td>
            </tr>)
        }

  

    </tbody>
  </table>
</div>
        {
            deletDoctor && <ConfirmModal 
            title={`Are you sure delete doctor`}
            message={`If you delete ${deletDoctor.name}, it cannot be`}
            deleteSucess={deleteSucess}
            modalData={deletDoctor}
            closeModal={closeModal}
            />
        }
        </div>
    );
};

export default ManageDoctor;