import { Navigate, useLocation } from "react-router";
import { toast } from 'react-toastify';

const PrivateRoute = ({children}) => {
    const token=localStorage.getItem('access_token') || null;
    const location=useLocation()
    

    if(token){
        return children
    }

    return <Navigate to="/login" state={{from:location}} replace/>
};

export default PrivateRoute;