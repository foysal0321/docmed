import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Dashbord from '../components/dashbord/Dashbord';
import Navbar from '../components/share/Navbar';
import { AuthContext } from '../context/Authcontext';
import Useadmin from '../hooks/Useadmin';

const Dashbordlyout = () => {
    const {user} = useContext(AuthContext)
    const [isadmin] = Useadmin(user?.email)
    return (
        <div>
            <Navbar />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet />
                   
                
                </div> 
                <div className="drawer-side">
                    <label  htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80  text-base-content">

                    <li><Link to='/dashboard'>My Dashboard</Link></li>
                    {
                        isadmin && <>
                          <li><Link to='/dashboard/allusers'>All users</Link></li>
                          <li><Link to='/dashboard/adddoctor'>Add doctor</Link></li>
                          <li><Link to='/dashboard/managedoctor'>Manage doctor</Link></li>
                        </>
                      
                    }                   
                 
                    </ul>
                
                </div>
              </div>
          
            
        </div>
    );
};

export default Dashbordlyout;