import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../context/Authcontext';

const DisplayError = () => {
    const {logoutUser} = useContext(AuthContext)
    const error = useRouteError();

    const logout =()=>{
        logoutUser()
        .then(()=>{})
        .catch(err=> console.log(err))
    }
    return (
        <div>
            <h4 className='text-red text-2xl text-center'>Something wrong.!</h4>
            <h6 className='text-red  text-center'>{error.statusText || error.message}</h6>
            <h4 className='text-red text-1xl text-center'>Please <button onClick={logout} className='btn btn-primary'>Sign out</button></h4>
        </div>
    );
};

export default DisplayError;