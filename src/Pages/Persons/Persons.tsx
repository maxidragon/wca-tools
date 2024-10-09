import { Box, Typography, TextField, Button } from "@mui/material";
import { searchPersons } from "../../logic/users";
import { WCAPerson } from "../../logic/interface";
import { useState } from "react";
import PersonsList from "./Components/UsersList";
import { useNavigate } from "react-router-dom";

const Persons = () => {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState<string>("");
    const [id, setId] = useState<string>("");
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
            <Typography variant="body1">
                Go to user by ID
            </Typography>
            <TextField  
                label="ID"
                variant="outlined"
                onChange={(e) => setId(e.target.value)}
                value={id}
            />
            <Button onClick={() => navigate(`/panel/persons/${id}`)} variant="contained">Go</Button>
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