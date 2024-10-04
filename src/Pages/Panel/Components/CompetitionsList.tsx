import {
    LinearProgress,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Typography,
} from "@mui/material";
import { WCACompetition } from "../../../logic/interface";
import CompetitionFlagIcon from "../../../Components/CompetitionFlagIcon";
import { Link } from "react-router-dom";

interface CompetitionsListProps {
    competitions: WCACompetition[];
    isLoading: boolean;
}

const CompetitionsList = ({ competitions, isLoading }: CompetitionsListProps) => {
    return (

        <Paper>
            {isLoading && <LinearProgress />}
            {competitions.length > 0 ? (
                <List dense={true} disablePadding>
                    {competitions.map((competition) => (
                        <ListItemButton
                            key={competition.id}
                            component={Link}
                            to={`/competitions/${competition.id}`
                            }
                        >
                            <ListItemIcon>
                                <ListItemIcon sx={{ p: 2 }}>
                                    <CompetitionFlagIcon
                                        country={competition.country_iso2}
                                    />
                                </ListItemIcon>
                            </ListItemIcon>
                            <ListItemText primary={competition.name} />
                        </ListItemButton>
                    ))}
                </List>
            ) : !isLoading && (
                <Typography variant="body1" sx={{ p: 2 }}>
                    No competitions found
                </Typography>
            )}
        </Paper>
    );
};

export default CompetitionsList;
