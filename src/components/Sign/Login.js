import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Authcontext';
import UseToken from '../../hooks/UseToken';

const Login = () => {
    const {signUser} = useContext(AuthContext)
    const { register, formState:{errors}, handleSubmit } = useForm();
    const [data, setData] = useState("");
    const [logerr,setlogerr] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'
    const [logEmail,setLogemail] = useState('')
    const [token] = UseToken(logEmail)

    if(token){
        navigate(from, {replace: true})
    }

    const handleLogin = (data)=>{
        setlogerr('')
        signUser(data.email, data.password)
        .then(result=>{
            const user = result.user;
            //console.log(user);
            setLogemail(data.email)
        })
        .catch(err=>{
            setlogerr(err.message)
            console.error(err);
        })
        console.log(data);

    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className="">
                <h2 className='text-4xl'>Log in</h2>
                <form onSubmit={handleSubmit(handleLogin)}> 
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
                <p className='text-red-600'>{ logerr && logerr}</p>
                <input className='btn btn-accent w-full' type="submit" value='Login'/>
                </form>
                <p>New to doctor portal <Link className='text-primary' to='/signup'>Create new account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTUNE WITH GOOGLE</button>
                </div>
    </div>
    );
};

export default Login;