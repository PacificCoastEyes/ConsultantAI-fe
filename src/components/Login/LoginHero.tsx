import { Box } from "@mui/material";
import LoginHeroImage from "../../images/login-hero.jpg";

const LoginHero = () => {
    return (
        <Box
            id="login-hero"
            display={{ xs: "none", md: "initial" }}
            width="30%"
            sx={{
                backgroundImage: `url(${LoginHeroImage})`,
                backgroundSize: "cover",
                backgroundPositionX: "50%",
            }}
        ></Box>
    );
};

export default LoginHero;
