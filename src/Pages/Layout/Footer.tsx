import { GitHub } from "@mui/icons-material"
import { Box, IconButton, Link } from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{
            display: "flex", mt: "auto", mb: 2, width: "full", justifyContent: "center"
        }}>
            <IconButton component={Link} href="https://github.com/maxidragon/wca-tools" rel="noopener noreferrer">
                <GitHub width="64" height="64" />
            </IconButton>
        </Box>
    );
};

export default Footer;