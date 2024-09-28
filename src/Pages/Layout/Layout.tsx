import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Header from "./Header";

const Layout = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                backgroundColor: "background.paper",
                color: "white",
            }}
        >
            <Header />
            <Outlet />
        </Box>
    );
};

export default Layout;