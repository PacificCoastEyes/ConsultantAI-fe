import { Stack } from "@mui/material";

import LoginForm from "./LoginForm";
import LoginHero from "./LoginHero";

const LoginContent = () => {
    return (
        <Stack direction="row">
            <LoginForm />
            <LoginHero />
        </Stack>
    );
};

export default LoginContent;
