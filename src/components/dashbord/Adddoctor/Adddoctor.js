import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';

const Adddoctor = () => {
    const { register, formState:{errors}, handleSubmit } = useForm();
    const imgbbKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate()

    const {data: specility =[], isLoding}= useQuery({
        queryKey: ['specility'],
        queryFn: async ()=>{
            const url = await fetch(`https://doctors-protal-server-eight.vercel.app/appoimentspecility`)
            const data = await url.json()
            return data
        }
    })
  

    const handleDoctor =(data)=>{
        const img = data.img[0];
        const fromData = new FormData()
        fromData.append('image',img)
        const url = `https://api.imgbb.com/1/upload?key=${imgbbKey}`
        fetch(url,{
            method: 'POST',
            body: fromData
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.success){        
            const doctor ={
                name: data.name,
                email : data.email,
                specility: data.spicility,
                image:result.data.url
            }
           //console.log(doctor);
            fetch(`https://doctors-protal-server-eight.vercel.app/doctors`,{
                method: 'POST',
                headers:{
                    'content-type': 'application/json',
                    'authrazation': `bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(doctor)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                alert('success')
                navigate('/dashboard/managedoctor')
            })
        }
        })      
        
    }

       if(isLoding){
        return <progress className="progress w-56"></progress>
    }
    return (
        <div>
            <h2>Add A Doctor</h2>
            <form onSubmit={handleSubmit(handleDoctor)}> 
        <div className="form-control w-full max-w-xs">
        <label className="label">
            <span className="label-text">Name</span>
        </label>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"
              {...register("name",
               {required: "Name Address is required"})}
                />
                {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
        <label className="label">
            <span className="label-text">Email</span>
        </label>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"
              {...register("email",
               {required: "Email Address is required"})}
                />
                {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
        <label className="label">
            <span className="label-text">Specialiy</span>
        </label>
        <select className="select select-bordered select-ghost w-full max-w-xs"
        {...register('spicility',
        {required: 'Spicility is required'}
        )}
        >
            <option>Please select spicility</option>
            {
                specility.map(spici => <option
                key={spici._id}
                value={spici.name}
                > {spici.name}
                </option>)
            }           
            </select>
        </div>
        <div className="form-control w-full max-w-xs">
        <label className="label">
            <span className="label-text">Photo</span>
        </label>
            <input type="file" placeholder="Type here" className="input input-bordered w-full max-w-xs"
              {...register("img",
               {required: "img Address is required"})}
                />
                {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}
        </div>
                  
            
            <input className='btn btn-accent' type="submit" value='Add doctor'/>
            </form>
        </div>
    );
};

export default Adddoctor;