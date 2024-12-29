import { Box, Typography } from "@mui/material";

const Loading = () => {
    return (
        <Box
            sx={{
                py: { xs: 2, md: 3 },
                px: { xs: 1, md: 3 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 2,
            }}
        >
            <Typography variant="h5" sx={{ marginBottom: "0.2em" }}>
                Loading...
            </Typography>
        </Box>
    );
};

export default Loading;