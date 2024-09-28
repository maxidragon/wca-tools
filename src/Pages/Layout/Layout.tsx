import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "background.paper",
                color: "white",
                minHeight: "100vh",
            }}
        >
            <Header />
            <Outlet />
            <Footer />
        </Box>
    );
};

export default Layout;