import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Authcontext';
import UseToken from '../../hooks/UseToken';

const Signup = () => {
    const {crateUser, updateUser} = useContext(AuthContext)
    const { register, formState:{errors}, handleSubmit } = useForm();
    const [data, setData] = useState("");
     const navigate = useNavigate()
    const [createEmail,setemail] = useState('')
   const [token] = UseToken(createEmail);
   
   if(token){
    navigate('/')
   }

    const handleSignup = (data)=>{
        crateUser(data.email,data.password)
        .then(result=>{
            const user = result.user;
            // console.log(user);         
            const profile = {
                displayName: data.name
            }
            updateUser(profile)
            .then(()=>{
                saveUser(data.name, data.email)
           
            })
            .catch(err=> {
                console.error(err);
            })
            alert('success')
           
        })
        .catch(err=>{
            console.error(err);
        })
        console.log(data);
    }

    const saveUser = (name,email)=>{
        const user ={name,email}
        fetch('https://doctors-protal-server-eight.vercel.app/users',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
          setemail(email)
        })
    }

   

    return (
        <div className='h-[800px] flex justify-center items-center'>
        <div className="">
            <h2 className='text-4xl'>Sign up</h2>
            <form onSubmit={handleSubmit(handleSignup)}> 
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
            <span className="label-text">Password</span>
        </label>
            <input type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" 
             {...register("password",
              {required: "Password Address is required",
               minLength: {value:6, message: 'Password should be 6 chartars'}})
              }/>
              {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
        </div>
        <label className="label">
        <Link><span className="label-text-alt">Forget password?</span></Link>
        </label>             
            <p>{data}</p>
            <input className='btn btn-accent w-full' type="submit" value='Sign up'/>
            </form>
            <p>Already have an accound <Link className='text-primary' to='/login'>Please login</Link></p>
            <div className="divider">OR</div>
            <button className='btn btn-outline w-full'>CONTUNE WITH GOOGLE</button>
            </div>
</div>
    );
};

export default Signup;