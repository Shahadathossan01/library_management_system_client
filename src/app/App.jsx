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


const App = () => {
    return (
        <Routes>
            <Route element={<MainLayout></MainLayout>}>
                <Route path="/" element={<Home></Home>} />
                <Route path="/register" element={<Register></Register>} />
                <Route path="/login" element={<Login></Login>} />
                <Route path="/bookDetails/:id" element={<BookDetails></BookDetails>} />
                <Route path="/bookIssueFrom/:id" element={<BookIssueFrom></BookIssueFrom>} />
                <Route path="/bookIssueSuccess/:id" element={<BookIssueSuccess></BookIssueSuccess>} />
                <Route path="/bookIssues" element={<BookIssues></BookIssues>} />
                <Route path="/profile" element={<ProfileManagement></ProfileManagement>} />
            </Route>
        </Routes>
    );
};

export default App;