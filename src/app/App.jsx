import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../features/Home/Home";
import { Register } from "../features/auth/Register";
import { Login } from "../features/auth/Login";
import {BookDetails} from "../features/bookDetails/BookDetails";
import { BookIssueFrom } from "../features/bookIssue";
import { BookIssueSuccess } from "../features/bookIssue/BookIssueSuccess";
import {BookIssues} from "../features/bookIssue/BookIssues";
import { ProfileManagement } from "../features/profile/ProfileManagement";
import PrivateRoute from "../privateRoutes/PrivateRoute";
import AuthRoutes from "../routers/AuthRoutes";
import UserRoutes from "../routers/UserRoutes";
import { useAuthContext } from "../features/auth/hooks/useAuthContext";
import AdminRoutes from "../routers/AdminRoutes";
import { AdminManagement } from "../features/admin";

const App = () => {
    const {user,access_token}=useAuthContext()
    return (
        <Routes>
            {(!access_token || (access_token && user?.role === 'user')) && (

                <Route element={<MainLayout />}>
                    {AuthRoutes()}
                    {UserRoutes()}
                </Route>

            )}

            {access_token && user?.role === 'admin' && (

                <Route path="/admin" element={<AdminManagement />}>
                    {AdminRoutes()}
                </Route>

            )}


            <Route path="*" element={<h2>404 - Not Found</h2>} />
        </Routes>

    );
};

export default App;