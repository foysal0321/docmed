import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/Authcontext';
import Useadmin from '../hooks/Useadmin';

const AdminRout = ({children}) => {
    const {user, loding} = useContext(AuthContext);
    const [isadmin, adminLoding] = Useadmin(user?.email)
    const location = useLocation();

    if(loding || adminLoding){
        return <progress className="progress w-56"></progress>
    }
   if(user && isadmin){
    return children;
   }
   return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default AdminRout;