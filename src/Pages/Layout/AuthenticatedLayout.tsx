import { Box, Container, Divider, IconButton, Toolbar, Typography } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

import Sidebar from "./Sidebar";
import { ChevronLeft, Menu } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { getUserInfo, isUserLoggedIn } from "../../logic/auth";
import AccountMenu from "./AccountMenu";
import Drawer from "./Drawer";
import AppBar from "./AppBar";

const AuthenticatedLayout = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(true);
    const userLoggedIn = isUserLoggedIn();
    const user = getUserInfo();

    useEffect(() => {
        if (!userLoggedIn) {
            navigate("/auth/login");
        }
    }, [userLoggedIn, navigate]);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 800) {
                setOpen(false);
            } else {
                setOpen(true);
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Box sx={{ display: "flex" }}>
            <AppBar position="absolute" open={open}>
                <Toolbar
                    sx={{
                        backgroundColor: "#282828",
                        display: "flex",
                        justifyContent: open ? "flex-end" : "space-between",
                    }}
                >
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{
                            marginRight: "36px",
                            ...(open && { display: "none" }),
                        }}
                    >
                        <Menu />
                    </IconButton>
                    <AccountMenu user={user} />
                </Toolbar>
            </AppBar>
            
            <Drawer variant="permanent" open={open}>
                <Toolbar
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "#121212",
                        px: [1],
                        justifyContent: "space-between",
                    }}
                >
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 5 }}>
                        wca-tools
                    </Typography>
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeft />
                    </IconButton>
                </Toolbar>
                <Divider />
                <Sidebar />
            </Drawer>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "background.paper",
                    color: "white",
                    minHeight: "100vh",
                }}

            >
                <Container sx={{ mt: 10, mb: 4 }}>
                    <Outlet />
                </Container>
            </Box>
        </Box>
    );
};

export default AuthenticatedLayout;