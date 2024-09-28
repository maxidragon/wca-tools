import { GitHub, Login } from "@mui/icons-material";
import { AppBar, Box, IconButton, Link, Toolbar, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import LoginPartial from "./LoginPartial";

const Header = () => {
    return (
        <AppBar
            position="static"
            color="primary"
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            <Toolbar>
                <Typography
                    variant="h6"
                    color="inherit"
                    style={{ flexGrow: 1 }}
                    component={RouterLink}
                    to={`/`}
                    sx={{ textDecoration: "none" }}
                >
                    wca-tools
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                <LoginPartial />
                <IconButton component={Link} href="https://github.com/maxidragon/wca-tools" rel="noopener noreferrer">
                    <GitHub fontSize="large" />
                </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;