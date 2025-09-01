import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import AuthRoutes from "../routers/AuthRoutes";
import UserRoutes from "../routers/UserRoutes";
import { useAuthContext } from "../features/auth/hooks/useAuthContext";
import AdminRoutes from "../routers/AdminRoutes";
import AdminLayout from "../layouts/AdminLayout";

const App = () => {
  const { user, access_token } = useAuthContext();
  return (
    <Routes>
      {/* user routes */}
      {(!access_token || (access_token && user?.role === "user")) && (
        <Route element={<MainLayout />}>
          {AuthRoutes()}
          {UserRoutes()}
        </Route>
      )}

      {/* admin routes */}
      {access_token && user?.role === "admin" && (
        <Route path="/admin" element={<AdminLayout />}>
          {AdminRoutes()}
        </Route>
      )}

      <Route path="*" element={<h2>404 - Not Found</h2>} />
    </Routes>
  );
};

export default App;
