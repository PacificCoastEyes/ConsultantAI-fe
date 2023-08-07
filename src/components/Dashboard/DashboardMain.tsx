import DashboardGreeting from "./DashboardGreeting";
import DashboardMenu from "./DashboardMenu";

import { Stack } from "@mui/material";

const DashboardMain = () => {
    return (
        <Stack
            id="dashboard-content"
            width={{ xs: "100%", md: "70%" }}
            padding={5}
            alignItems="center"
        >
            <DashboardGreeting />
            <DashboardMenu />
        </Stack>
    );
};

export default DashboardMain;
