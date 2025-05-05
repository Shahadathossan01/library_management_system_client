import { Box } from "@mui/material";
import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
    return (
        <Box>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </Box>
    );
};

export default MainLayout;