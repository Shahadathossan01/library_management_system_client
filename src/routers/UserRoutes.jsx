
import PrivateRoute from "../privateRoutes/PrivateRoute";
import { BookDetails } from "../features/bookDetails/BookDetails";
import { BookIssueFrom, BookIssueSuccess } from "../features/bookIssue";
import { BookIssues } from "../features/bookIssue/BookIssues";
import { ProfileManagement } from "../features/profile/ProfileManagement";
import { Route } from "react-router";
import Home from "../features/home/Home";

const UserRoutes = () => {
    return (
        <>
            <Route path="/" element={<Home />} />
            <Route path="/bookDetails/:id" element={<BookDetails />} />
            <Route path="/bookIssueFrom/:id" element={<PrivateRoute><BookIssueFrom /></PrivateRoute>} />
            <Route path="/bookIssueSuccess/:id" element={<PrivateRoute><BookIssueSuccess /></PrivateRoute>} />
            <Route path="/bookIssues" element={<PrivateRoute><BookIssues /></PrivateRoute>} />
            <Route path="/profile" element={<PrivateRoute><ProfileManagement /></PrivateRoute>} />
        </>
    );
};

export default UserRoutes;
