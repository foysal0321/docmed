import { createBrowserRouter } from "react-router-dom";
import Main from '../lyout/Main'
import Home from '../components/home/Home';
import Signup from '../components/Sign/Signup'
import Login from '../components/Sign/Login'
import Dashbord from "../components/dashbord/Dashbord";
import Privetrout from "./Privetrout";
import Apporment from "../components/home/Apporment";
import Appoments from "../components/home/apporment/Appoments";
import Dashbordlyout from "../lyout/Dashbordlyout";
import Myappoiment from "../components/dashbord/Myappoiment";
import Allusers from "../components/dashbord/allusers/Allusers";
import AdminRout from "./AdminRout";
import Adddoctor from "../components/dashbord/Adddoctor/Adddoctor";
import ManageDoctor from "../components/dashbord/manageDoctor/ManageDoctor";
import Payment from "../components/dashbord/payment/Payment";
import DisplayError from "../components/share/Error/DisplayError";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        errorElement: <DisplayError />,
        children:[
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/apporment',
                element: <Appoments />
            },
            
        ]
    },
        {
                path: '/dashboard',
                element: <Privetrout> <Dashbordlyout /> </Privetrout> ,
                errorElement: <DisplayError />,
                children: [
                    {
                        path: '/dashboard',
                        element: <Myappoiment />
                    },
                    {
                        path: '/dashboard/allusers',
                        element: <AdminRout><Allusers /> </AdminRout> 
                    },
                    {
                        path: '/dashboard/adddoctor',
                        element: <AdminRout><Adddoctor /> </AdminRout> 
                    },
                    {
                        path: '/dashboard/managedoctor',
                        element: <AdminRout><ManageDoctor /> </AdminRout> 
                    },
                    {
                        path: '/dashboard/payment/:id',
                        element: <Payment /> ,
                        loader:({params})=> fetch(`https://doctors-protal-server-eight.vercel.app/bookings/${params.id}`)
                    },
                ]
            },
])

export default router;