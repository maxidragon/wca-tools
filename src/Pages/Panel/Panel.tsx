import { Box, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import TabPanel from "../../Components/TabPanel";
import { isUserLoggedIn } from "../../logic/auth";
import { useNavigate } from "react-router-dom";

const Panel = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState<number>(1);
    const isLoggedIn = isUserLoggedIn();
    const handleChange = (_: React.SyntheticEvent, newValue: string) => {
        setValue(+newValue);
    };

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/");
        }
    }, [isLoggedIn, navigate]);
    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Item One" value={1} />
                    <Tab label="Item Two" value={2} />
                    <Tab label="Item Three" value={3} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={1}></TabPanel>
            <TabPanel value={value} index={2}></TabPanel>
            <TabPanel value={value} index={3}></TabPanel>
        </>
    );
};

export default Panel;