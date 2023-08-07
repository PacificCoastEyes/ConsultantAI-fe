import { Button, Stack, Typography } from "@mui/material";
import { IProjectType } from "../../models/IProjectType";
import {
    Architecture,
    Article,
    Language,
    Smartphone,
} from "@mui/icons-material";

const DashboardMenu = () => {
    const projectTypes: IProjectType[] = [
        {
            name: "webApp",
            label: "Web App",
            icon: Language,
        },
        {
            name: "mobileApp",
            label: "Mobile App",
            icon: Smartphone,
        },
        {
            name: "wireframe",
            label: "Wireframe",
            icon: Architecture,
        },
        {
            name: "businessPlan",
            label: "Business Plan",
            icon: Article,
        },
    ];

    return (
        <Stack
            direction={{ xs: "column", md: "row" }}
            width="100%"
            marginTop={3}
            justifyContent="center"
            flexWrap="wrap"
        >
            {projectTypes.map(projectType => (
                <Button
                    variant="contained"
                    sx={{
                        width: { xs: "100%", md: "200px" },
                        height: "100px",
                        marginX: { xs: 0, md: 1 },
                        marginY: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    key={projectType.name}
                >
                    <Stack alignItems="center">
                        <projectType.icon
                            sx={{ width: "35px", height: "35px" }}
                        />
                        <Typography
                            fontSize="2em"
                            color="white"
                            sx={{ textTransform: "none" }}
                        >
                            {projectType.label}
                        </Typography>
                    </Stack>
                </Button>
            ))}
        </Stack>
    );
};

export default DashboardMenu;
