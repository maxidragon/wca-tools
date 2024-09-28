import { AppBar, Box, Toolbar, Typography } from "@mui/material";
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
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;