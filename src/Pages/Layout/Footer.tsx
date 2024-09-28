import { GitHub } from "@mui/icons-material"
import { Box, IconButton, Link } from "@mui/material"

const Footer = () => {
    return (
        <Box sx={{ display: "flex", mt: "auto", mb: 2, backgroundColor: "" }}>
            <IconButton component={Link} href="https://github.com/maxidragon/wca-tools" rel="noopener noreferrer">
                <GitHub />
            </IconButton>
        </Box>
    );
};

export default Footer;