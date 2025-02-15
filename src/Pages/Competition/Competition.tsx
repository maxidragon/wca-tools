import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { WCACompetition } from "../../logic/interface";
import { getCompetitionBasicInfo } from "../../logic/competitions";
import Loading from "../../Components/Loading";
import DelegatesList from "./Components/DelegatesList";

const Competition = () => {
    const { id } = useParams<{ id: string }>();
    const [basicInfo, setBasicInfo] = useState<WCACompetition | null>(null);

    useEffect(() => {
        if (!id) return;
        getCompetitionBasicInfo(id).then((data) => {
            setBasicInfo(data);
        });

    }, [id]);

    if (!basicInfo) return <Loading />;

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
                {basicInfo.name} ({basicInfo.id})
            </Typography>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2 }}>
                <Button variant="contained" sx={{
                    width: "fit-content",
                }} component={Link} to={`/panel/competitions/${id}/competitors`}>
                    Competitors
                </Button>
                <Button variant="contained" sx={{
                    width: "fit-content",
                }} component={Link} to={`/panel/competitions/${id}/assignments`}>
                    Assignments counter
                </Button>
            </Box>
            <Typography variant="h6">
                Delegates
            </Typography>
            <Button variant="contained" sx={{
                width: "fit-content",
            }} onClick={() => {
                const emails = basicInfo.delegates.map((delegate) => delegate.email).join(", ");
                navigator.clipboard.writeText(emails);
            }}>
                Copy delegates' emails
            </Button>
            <DelegatesList delegates={basicInfo.delegates} />
        </Box>
    );
};

export default Competition;