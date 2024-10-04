import {
    Avatar,
    LinearProgress,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Typography,
} from "@mui/material";
import { WCAPerson } from "../../../logic/interface";
import { Link } from "react-router-dom";

interface PersonsListProps {
    persons: WCAPerson[];
    isLoading: boolean;
}


const PersonsList = ({ persons, isLoading }: PersonsListProps) => {
    return (
        <Paper>
            {isLoading && <LinearProgress />}
            {persons.length > 0 ? (
                <List dense={true} disablePadding>
                    {persons.map((person) => (
                        <ListItemButton
                            key={person.wcaId}
                            component={Link}
                            to={`/panel/persons/${person.wcaId}`
                            }
                        >
                            <ListItemIcon>
                                <ListItemIcon sx={{ p: 2 }}>
                                    <Avatar src={person.avatarUrl} />
                                </ListItemIcon>
                            </ListItemIcon>
                            <ListItemText primary={person.name} />
                        </ListItemButton>
                    ))}
                </List>
            ) : !isLoading && (
                <Typography variant="body1" sx={{ p: 2 }}>
                    No users found
                </Typography>
            )}
        </Paper>
    );
};

export default PersonsList;
