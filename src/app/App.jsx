import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../feaures/Home/Home";
import BookIssue from "../feaures/BookIssue/BookIssue";

const App = () => {
    return (
        <Routes>
            <Route element={<MainLayout></MainLayout>}>
                <Route path="/" element={<Home></Home>} />
                <Route path="/bookIssue" element={<BookIssue></BookIssue>} />
            </Route>
        </Routes>
    );
};

export default App;