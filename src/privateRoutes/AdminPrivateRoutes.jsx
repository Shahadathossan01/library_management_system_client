import { Navigate, useLocation } from "react-router";
import { useAuthContext } from "../features/auth/hooks/useAuthContext";

const AdminPrivateRoute = ({children}) => {
    const {access_token,user}=useAuthContext()
    const location=useLocation()
    

    if(access_token && user?.role==='admin'){
        return children
    }

    return <Navigate to="/login" state={{from:location}} replace/>
};

export default AdminPrivateRoute;