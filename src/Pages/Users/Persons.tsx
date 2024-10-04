import { Box, Typography, TextField } from "@mui/material";
import { searchPersons } from "../../logic/users";
import { WCAPerson } from "../../logic/interface";
import { useState } from "react";
import PersonsList from "./Components/UsersList";

const Persons = () => {
    const [searchText, setSearchText] = useState<string>("");
    const [persons, setPersons] = useState<WCAPerson[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
        setIsLoading(true);
        searchPersons(e.target.value).then((users) => {
            setPersons(users);
            setIsLoading(false);
        });
    };
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
                Search persons
            </Typography>
            <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                onChange={handleSearch}
                value={searchText}
            />
            <PersonsList persons={persons} isLoading={isLoading} />
        </Box>
    )
};

export default Persons;