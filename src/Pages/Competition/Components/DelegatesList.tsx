import {
    Avatar,
    Link,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Typography,
} from "@mui/material";
import { Delegate } from "../../../logic/interface";

interface DelegatesListProps {
    delegates: Delegate[];
}

const DelegatesList = ({ delegates }: DelegatesListProps) => {
    return (
        <Paper>
            {delegates.length > 0 ? (
                <List dense={true} disablePadding>
                    {delegates.map((delegate) => (
                        <ListItemButton
                            key={delegate.id}
                            component={Link}
                            href={delegate.url}
                        >
                            <ListItemIcon>
                                <ListItemIcon sx={{ p: 2 }}>
                                    <Avatar src={delegate.avatar.url} />
                                </ListItemIcon>
                            </ListItemIcon>
                            <ListItemText primary={delegate.name} />
                        </ListItemButton>
                    ))}
                </List>
            ) : (
                <Typography variant="body1" sx={{ p: 2 }}>
                    No delegates found
                </Typography>
            )}
        </Paper>
    );
};

export default DelegatesList;
