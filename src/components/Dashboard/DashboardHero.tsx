import { Box } from "@mui/material";

const DashboardHero = () => {
    return (
        <Box
            id="dashboard-hero"
            display={{ xs: "none", md: "initial" }}
            width="30%"
            sx={{
                backgroundImage:
                    "url(https://consultantaistorage.blob.core.windows.net/assets/images/dashboard-hero.jpg)",
                backgroundSize: "cover",
                backgroundPositionX: "50%",
            }}
        ></Box>
    );
};

export default DashboardHero;
