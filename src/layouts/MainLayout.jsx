import { Box } from "@mui/material";
import { Outlet } from "react-router";
import { Navbar } from "../components/shared/Navbar";

const MainLayout = () => {
    return (
        <Box>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </Box>
    );
};

export default MainLayout;