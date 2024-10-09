import {
    IconButton,
    LinearProgress,
    Link,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Typography,
} from "@mui/material";
import { WCACompetition } from "../logic/interface";
import CompetitionFlagIcon from "./CompetitionFlagIcon";
import { Link as RouterLink } from "react-router-dom";
import { formatDates } from "../logic/competitions";
import { Public } from "@mui/icons-material";

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
                        <ListItem sx={{pl: 0}} key={competition.id}>
                            <ListItemButton
                                key={competition.id}
                                component={RouterLink}
                                to={`/panel/competitions/${competition.id}`
                                }

                            >
                                <ListItemAvatar>
                                    <ListItemIcon sx={{ p: 2 }}>
                                        <CompetitionFlagIcon
                                            country={competition.country_iso2}
                                        />
                                    </ListItemIcon>
                                </ListItemAvatar>
                                <ListItemText primary={competition.name} secondary={formatDates(competition.start_date, competition.end_date)} />
                            </ListItemButton>
                            <IconButton edge="end" component={Link} href={competition.url} target="_blank" rel="noopener noreferrer">
                                <Public />
                            </IconButton>
                        </ListItem>
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
