import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Stack, Typography } from "@mui/material";

const DashboardGreeting = () => {
    let greeting = "";
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 12) greeting = "morning";
    if (hour >= 12 && hour < 18) greeting = "afternoon";
    if (hour >= 18 && hour < 21) greeting = "evening";
    if (hour >= 21 && hour < 24) greeting = "night";

    const authContext = useContext(AuthContext);
    const { activeUser } = authContext!;
    const { firstName } = activeUser;
    return (
        <Stack>
            <Typography
                variant="h1"
                color="primary"
                fontSize={{ xs: "3rem", md: "6rem" }}
            >
                {`Good ${greeting}, ${firstName}`}
            </Typography>
            <Typography
                variant="h2"
                color="secondary"
                fontSize={{ xs: "1.5rem", md: "3rem" }}
            >
                What are you building today?
            </Typography>
        </Stack>
    );
};

export default DashboardGreeting;
