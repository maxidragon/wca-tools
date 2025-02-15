const roles = [
    {
        id: "staff-judge",
        name: "Judge",
        color: "primary",
    },
    {
        id: "staff-runner",
        name: "Runner",
        color: "primary",
    },
    {
        id: "staff-scrambler",
        name: "Scrambler",
        color: "secondary",
    },
    {
        id: "organizer",
        name: "Organizer",
        color: "warning",
    },
    {
        id: "delegate",
        name: "Delegate",
        color: "error",
    },
    {
        id: "trainee-delegate",
        name: "Trainee delegate",
        color: "error",
    },
    {
        id: "staff-dataentry",
        name: "Data entry",
        color: "success",
    },
    {
        id: "staff-other",
        name: "Other",
        color: "info",
    },
]

export const wcifRoleName = (role: string) => {
    return roles.find((r) => r.id === role)?.name || role;
};

export const wcifRoleColor = (role: string) => {
    return roles.find((r) => r.id === role)?.color || "#000000";
};