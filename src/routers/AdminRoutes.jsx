
import { Route } from 'react-router';
import { AdminBookManagement } from '../features/book/AdminBookManagement';
import { BookIssuesManagementAdmin } from '../features/bookIssue/BookIssuesManagementAdmin';
import { UserManagement } from '../features/user';
import AdminPrivateRoute from '../privateRoutes/AdminPrivateRoutes';

const AdminRoutes = () => {
  return (
    <>
      <Route path="dashboard" element={<AdminPrivateRoute><UserManagement></UserManagement></AdminPrivateRoute>} />
      <Route path="book_management" element={<AdminPrivateRoute><AdminBookManagement></AdminBookManagement></AdminPrivateRoute>} />
      <Route path="book_issues" element={<AdminPrivateRoute><BookIssuesManagementAdmin></BookIssuesManagementAdmin></AdminPrivateRoute>} />
    </>
  );
};

export default AdminRoutes;