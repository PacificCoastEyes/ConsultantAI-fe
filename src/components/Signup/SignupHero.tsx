import { Box } from "@mui/material";
import SignupHeroImage from "../../images/signup-hero.jpg";

const SignupHero = () => {
    return (
        <Box
            id="signup-hero"
            display={{ xs: "none", md: "initial" }}
            width="30%"
            sx={{
                backgroundImage: `url(${SignupHeroImage})`,
                backgroundSize: "cover",
                backgroundPositionX: "50%",
            }}
        ></Box>
    );
};

export default SignupHero;
