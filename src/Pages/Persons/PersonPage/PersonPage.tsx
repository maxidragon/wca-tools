import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { WCAPerson } from "../../../logic/interface";
import { getUser } from "../../../logic/users";
import CompetitionsList from "../../../Components/CompetitionsList";
import Loading from "../../../Components/Loading";

const PersonPage = () => {
    const { id } = useParams<{ id: string }>();
    const [person, setPerson] = useState<WCAPerson | null>(null);

    useEffect(() => {
        if (!id) return;
        getUser(id).then((data) => {
            setPerson(data);
        });
    }, [id]);

    if (!person) return <Loading />

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
                {person.name} ({person.wcaId})
            </Typography>
            <Typography variant="h6">
                Upcoming competitions
            </Typography>
            <CompetitionsList competitions={person.upcomingCompetitions || []} isLoading={false} />
        </Box>
    );

};

export default PersonPage;