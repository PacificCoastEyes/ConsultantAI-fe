import { Box } from "@mui/material";

const LoginHero = () => {
    return (
        <Box
            id="login-hero"
            display={{ xs: "none", md: "initial" }}
            width="30%"
            sx={{
                backgroundImage:
                    "url(https://consultantaistorage.blob.core.windows.net/assets/images/login-hero.jpg)",
                backgroundSize: "cover",
                backgroundPositionX: "50%",
            }}
        ></Box>
    );
};

export default LoginHero;
