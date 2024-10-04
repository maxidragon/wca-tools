import { Link } from "react-router-dom";
import { Box, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";

const Sidebar = () => {
    return (
        <Box sx={{
            backgroundColor: "#121212",
            height: "100vh",
        }}>
            <List component="nav">
                <ListItemButton component={Link} to={"/panel"}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="My competitions" />
                </ListItemButton>
         
            </List>
        </Box>
    );
};

export default Sidebar;