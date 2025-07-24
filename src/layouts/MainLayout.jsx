import { Box } from "@mui/material";
import { Outlet } from "react-router";
import { Navbar } from "../components/shared/Navbar";

const MainLayout = () => {
    return (
        <Box>
            <Navbar></Navbar>
            <Box sx={{mt:15}}>
                <Outlet></Outlet>
            </Box>
        </Box>
    );
};

export default MainLayout;