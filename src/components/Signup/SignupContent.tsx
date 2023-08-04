import { Stack } from "@mui/material";

import SignupForm from "./SignupForm";
import SignupHero from "./SignupHero";

const SignupContent = () => {
    return (
        <Stack direction="row">
            <SignupForm />
            <SignupHero />
        </Stack>
    );
};

export default SignupContent;
