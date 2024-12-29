import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Loading";
import { getCompetitionWcif } from "../../logic/competitions";
import { Competition as WCIF } from "@wca/helpers";
import CompetitorsList from "./Components/CompetitorsList";

const Competitors = () => {
    const { id } = useParams<{ id: string }>();

    const [wcif, setWcif] = useState<WCIF | null>(null);
    
    const acceptedRegistrations = wcif?.persons.filter((person) => person.registration?.status === "accepted");

    const pendingRegistrations = wcif?.persons.filter((person) => person.registration?.status === "pending");

    const deletedRegistrations = wcif?.persons.filter((person) => person.registration?.status === "deleted");

    useEffect(() => {
        if (!id) return;
        getCompetitionWcif(id).then((data) => {
            setWcif(data);
        });
    }, [id]);

    if (!wcif) return <Loading />;

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
                {wcif.name} ({wcif.id})
            </Typography>
            <Typography variant="h6">
                Accepted registrations
            </Typography>
            <CompetitorsList persons={acceptedRegistrations || []} />
            <Typography variant="h6">
                Pending registrations
            </Typography>
            <CompetitorsList persons={pendingRegistrations || []} />
            <Typography variant="h6">
                Deleted registrations
            </Typography>
            <CompetitorsList persons={deletedRegistrations || []} />
        </Box>
    );
};

export default Competitors;