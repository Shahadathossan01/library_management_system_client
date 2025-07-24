
import Home from "../features/Home/Home";
import PrivateRoute from "../privateRoutes/PrivateRoute";
import { BookDetails } from "../features/bookDetails/BookDetails";
import { BookIssueFrom, BookIssueSuccess } from "../features/bookIssue";
import { BookIssues } from "../features/bookIssue/BookIssues";
import { ProfileManagement } from "../features/profile/ProfileManagement";
import { Route } from "react-router";

const UserRoutes = () => {
    return (
        <>
            <Route path="/" element={<Home />} />
            <Route path="/bookDetails/:id" element={<PrivateRoute><BookDetails /></PrivateRoute>} />
            <Route path="/bookIssueFrom/:id" element={<PrivateRoute><BookIssueFrom /></PrivateRoute>} />
            <Route path="/bookIssueSuccess/:id" element={<PrivateRoute><BookIssueSuccess /></PrivateRoute>} />
            <Route path="/bookIssues" element={<PrivateRoute><BookIssues /></PrivateRoute>} />
            <Route path="/profile" element={<PrivateRoute><ProfileManagement /></PrivateRoute>} />
        </>
    );
};

export default UserRoutes;
