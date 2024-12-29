import {
    Avatar,
    Button,
    Link,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Typography,
} from "@mui/material";
import { Person } from "@wca/helpers";
import { WCA_ORIGIN } from "../../../logic/request";

interface CompetitorsListProps {
    persons: Person[];
}

const CompetitorsList = ({ persons }: CompetitorsListProps) => {
    return (
        <>
            {persons.length > 0 ? (
                <Button variant="contained" sx={{
                    width: "fit-content",
                }} onClick={() => {
                    const emails = persons.map((person) => person.email).join(", ");
                    navigator.clipboard.writeText(emails);
                }}>
                    Copy emails
                </Button>
            ) : null}
            <Paper>
                {persons.length > 0 ? (
                    <List dense={true} disablePadding>
                        {persons.map((person) => (
                            <ListItemButton
                                key={person.registrantId}
                                component={Link}
                                href={person.wcaId ? `${WCA_ORIGIN}/persons/${person.wcaId}` : undefined}
                            >
                                <ListItemIcon>
                                    <ListItemIcon sx={{ p: 2 }}>
                                        <Avatar src={person.avatar?.thumbUrl} />
                                    </ListItemIcon>
                                </ListItemIcon>
                                <ListItemText primary={`${person.name} (${person.registrantId})`} />
                            </ListItemButton>
                        ))}
                    </List>
                ) : (
                    <Typography variant="body1" sx={{ p: 2 }}>
                        No persons found
                    </Typography>
                )}
            </Paper>
        </>
    );
};

export default CompetitorsList;
