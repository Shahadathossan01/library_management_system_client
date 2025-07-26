
import { Route } from 'react-router';
import UserManagement from '../features/admin/components/UserManagement';
import { AdminBookManagement } from '../features/book/AdminBookManagement';
import { BookIssuesManagementAdmin } from '../features/bookIssue/BookIssuesManagementAdmin';

const AdminRoutes = () => {
  return (
    <>
      <Route path="dashboard" element={<UserManagement></UserManagement>} />
      <Route path="book_management" element={<AdminBookManagement></AdminBookManagement>} />
      <Route path="book_issues" element={<BookIssuesManagementAdmin></BookIssuesManagementAdmin>} />
      <Route path="requested_book_issues" element={<h1>Requested Book Issues</h1>} />
    </>
  );
};

export default AdminRoutes;