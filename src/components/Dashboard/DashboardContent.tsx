import { Stack } from "@mui/material";

import DashboardMain from "./DashboardMain";
import DashboardHero from "./DashboardHero";

const DashboardContent = () => {
    return (
        <Stack direction="row">
            <DashboardMain />
            <DashboardHero />
        </Stack>
    );
};

export default DashboardContent;
