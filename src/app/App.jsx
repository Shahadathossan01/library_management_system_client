import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../feaures/Home/Home";
import BookIssue from "../feaures/BookIssue/BookIssue";
import { Register } from "../feaures/auth/Register";
import { Login } from "../feaures/auth/Login";
import {BookDetails} from "../feaures/bookDetails/BookDetails";

const App = () => {
    return (
        <Routes>
            <Route element={<MainLayout></MainLayout>}>
                <Route path="/" element={<Home></Home>} />
                <Route path="/bookIssue" element={<BookIssue></BookIssue>} />
                <Route path="/register" element={<Register></Register>} />
                <Route path="/login" element={<Login></Login>} />
                <Route path="/bookDetails/:id" element={<BookDetails></BookDetails>} />
            </Route>
        </Routes>
    );
};

export default App;