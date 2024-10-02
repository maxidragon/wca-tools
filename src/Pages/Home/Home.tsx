import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { isUserLoggedIn } from "../../logic/auth";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [isLoggedIn, setLoggedIn] = useState(isUserLoggedIn());
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/");
        }
    }, [isLoggedIn, navigate]);

    useEffect(() => {
        const handleStorage = () => {
            setLoggedIn(isUserLoggedIn());
        };
        window.addEventListener("storage", handleStorage);
        return () => window.removeEventListener("storage", handleStorage);
    }, []);
    

    return (
        <Box sx={{ textAlign: "center", mt: 2 }}>
            <Typography variant="h4">Various tools for running WCA Competitions</Typography>
        </Box>
    );
};

export default Home;