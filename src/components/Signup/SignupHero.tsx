import { Box } from "@mui/material";

const SignupHero = () => {
    return (
        <Box
            id="signup-hero"
            display={{ xs: "none", md: "initial" }}
            width="30%"
            sx={{
                backgroundImage:
                    "url(https://consultantaistorage.blob.core.windows.net/assets/images/signup-hero.jpg)",
                backgroundSize: "cover",
                backgroundPositionX: "50%",
            }}
        ></Box>
    );
};

export default SignupHero;
