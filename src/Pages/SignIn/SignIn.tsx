import { Box, Typography, Button } from "@mui/material";
import { WCA_CLIENT_ID, signIn } from "../../logic/auth";
import { WCA_ORIGIN } from "../../logic/request";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        const queryParams = new URLSearchParams({
            redirect_uri: `${window.location.origin}/sign-in`,
            scope: "public manage_competitions",
            response_type: "token",
            client_id: WCA_CLIENT_ID,
        });
        window.location.href = `${WCA_ORIGIN}/oauth/authorize?${queryParams.toString()}`;
    };

    useEffect(() => {
        if (window.location.hash) {
            const hash = window.location.hash.replace(/^#/, "?");
            const hashParams = new URLSearchParams(hash);
            const token = hashParams.get("access_token");
            const expiresIn = hashParams.get("expires_in");
            window.location.hash = "";
            if (!token || !expiresIn) return;
            signIn(token, +expiresIn).then(ok => {
                if (ok) navigate("/panel");
            });
        }
    }, [navigate]);

    return (
        <Box sx={{ textAlign: "center", mt: 2 }}>
            <Typography variant="h4">Sign in to WCA Tools</Typography>
            <Button onClick={handleLogin} variant="contained">Sign in with WCA</Button>
        </Box>
    );

};

export default SignIn;