
import { Route } from 'react-router';
import UserManagement from '../features/admin/components/UserManagement';

const AdminRoutes = () => {
  return (
    <>
      <Route path="dashboard" element={<UserManagement></UserManagement>} />
      <Route path="review_management" element={<h1>Review Management</h1>} />
      <Route path="book_management" element={<h1>Book Management</h1>} />
      <Route path="book_issues" element={<h1>Book Issues</h1>} />
      <Route path="requested_book_issues" element={<h1>Requested Book Issues</h1>} />
    </>
  );
};

export default AdminRoutes;