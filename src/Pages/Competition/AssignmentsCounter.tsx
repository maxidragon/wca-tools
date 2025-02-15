import {
    Avatar,
    Box,
    Chip,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Loading";
import { getCompetitionWcif } from "../../logic/competitions";
import { Competition as WCIF } from "@wca/helpers";
import { wcifRoleColor, wcifRoleName } from "../../logic/utils";

const AssignmentsCounter = () => {
    const { id } = useParams<{ id: string }>();

    const [wcif, setWcif] = useState<WCIF | null>(null);

    useEffect(() => {
        if (!id) return;
        getCompetitionWcif(id).then((data) => {
            setWcif(data);
        });
    }, [id]);

    if (!wcif) return <Loading />;

    const transformedPersons = wcif.persons.filter((person) => person.registration?.status === "accepted").map(person => ({
        count: person.assignments?.filter(assignment => assignment.assignmentCode.startsWith("staff-")).length,
        ...person,
    })).sort((a, b) => (b.count || 0) - (a.count || 0));

    return (
        <Box sx={{ width: "100vh", overflowX: "auto" }}>
            <Paper>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Competitor</TableCell>
                                <TableCell>Assignments</TableCell>
                                <TableCell>Roles</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {transformedPersons.map((person) => (
                                <TableRow key={person.registrantId}>
                                    <TableCell>
                                        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                                            <Avatar src={person.avatar?.thumbUrl} />
                                            {person.name}
                                        </Box>
                                    </TableCell>
                                    <TableCell>{person.count}</TableCell>
                                    <TableCell>
                                        <Box sx={{ display: "flex", gap: 1 }}>
                                            {person.roles?.map((role) => (
                                                <Chip key={role} label={wcifRoleName(role)} color={wcifRoleColor(role) as never} />
                                            ))}
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box >
    );
};

export default AssignmentsCounter;