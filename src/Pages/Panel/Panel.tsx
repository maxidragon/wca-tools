import { Box, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { WCACompetition } from "../../logic/interface";
import { getUpcomingManageableCompetitions, searchCompetitions } from "../../logic/competitions";
import CompetitionsList from "./Components/CompetitionsList";

const MyCompetitions = () => {
    const [searchText, setSearchText] = useState<string>("");
    const [manageableCompetitions, setManageableCompetitions] = useState<WCACompetition[]>([]);
    const [searchedCompetitions, setSearchedCompetitions] = useState<WCACompetition[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isSearchLoading, setIsSearchLoading] = useState<boolean>(false);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsSearchLoading(true);
        setSearchText(e.target.value);
        if (e.target.value.length < 1) {
            setSearchedCompetitions([]);
            return;
        }
        searchCompetitions(e.target.value).then((competitions) => {
            setSearchedCompetitions(competitions);
            setIsSearchLoading(false);
        });
    };

    useEffect(() => {
        getUpcomingManageableCompetitions().then((competitions) => {
            setManageableCompetitions(competitions);
            setIsLoading(false);
        });
    }, []);

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
            <Typography variant="h4">Upcoming managable competitions</Typography>
            <CompetitionsList competitions={manageableCompetitions} isLoading={isLoading} />
            <Typography variant="h5" sx={{ marginBottom: "0.2em" }}>
                Search for competition
            </Typography>
            <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                onChange={handleSearch}
                value={searchText}
            />
            <CompetitionsList competitions={searchedCompetitions} isLoading={isSearchLoading} />
        </Box>
    );
};

export default MyCompetitions;