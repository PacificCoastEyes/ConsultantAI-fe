import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ILoginFormData, ILoginErrorStatus } from "../../models/ILoginForm";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import AuthFormBackground from "../../images/auth-form-background.jpg";
const LoginForm = () => {
    const [loginFormData, setLoginFormData] = useState<ILoginFormData>({
        loginEmail: "",
        loginPassword: "",
    });

    const [currentFieldDisplayed, setCurrentFieldDisplayed] =
        useState<string>("email");

    const [helperText, setHelperText] = useState<ILoginFormData>({
        loginEmail: "",
        loginPassword: "",
    });
    const [hasError, setHasError] = useState<ILoginErrorStatus>({
        loginEmail: false,
        loginPassword: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setHelperText(prevState => {
            return { ...prevState, [e.target.id]: "" };
        });
        setHasError(prevState => {
            return { ...prevState, [e.target.id]: false };
        });
        setLoginFormData(prevState => {
            return { ...prevState, [e.target.id]: e.target.value };
        });
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === "Enter") {
            if (currentFieldDisplayed === "email") validateEmail();
            if (currentFieldDisplayed === "password") validatePassword();
        }
    };

    const validateEmail = (): void => {
        if (!loginFormData.loginEmail) {
            setHelperText(prevState => {
                return {
                    ...prevState,
                    loginEmail: "Please enter an email address",
                };
            });
            setHasError(prevState => {
                return { ...prevState, loginEmail: true };
            });
        } else if (
            loginFormData.loginEmail &&
            !(
                loginFormData.loginEmail.includes("@") &&
                loginFormData.loginEmail.includes(".")
            )
        ) {
            setHelperText(prevState => {
                return {
                    ...prevState,
                    loginEmail: "Please enter a valid email address",
                };
            });
            setHasError(prevState => {
                return { ...prevState, loginEmail: true };
            });
        } else {
            setCurrentFieldDisplayed("password");
        }
    };

    const validatePassword = (): void => {
        if (!loginFormData.loginPassword) {
            setHelperText(prevState => {
                return {
                    ...prevState,
                    loginPassword: "Please enter a password",
                };
            });
            setHasError(prevState => {
                return { ...prevState, loginPassword: true };
            });
        } else {
            handleSubmit();
        }
    };

    const handleSubmit = (): void => {};

    return (
        <Box
            id="login-form"
            width={{ xs: "100%", md: "70%" }}
            padding={3}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems={{ xs: "flex-start", sm: "center" }}
            sx={{
                backgroundImage: `url(${AuthFormBackground})`,
                backgroundPositionX: {
                    xs: "35%",
                    sm: "80%",
                    md: "70%",
                    lg: "80%",
                    xl: "110%",
                },
                backgroundPositionY: { xs: "60%", sm: "80%" },
            }}
        >
            <Typography variant="h4">Log In</Typography>
            <Typography marginTop={1}>
                New to Consultant.AI? <Link to="/signup">Sign up</Link>
            </Typography>
            <Stack>
                {currentFieldDisplayed === "email" && (
                    <TextField
                        id="loginEmail"
                        type="email"
                        value={loginFormData.loginEmail}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        placeholder="name@company.com"
                        helperText={helperText.loginEmail}
                        error={hasError.loginEmail}
                        variant="filled"
                        label="Email"
                        color="primary"
                        margin="dense"
                    />
                )}
                {currentFieldDisplayed === "password" && (
                    <TextField
                        id="loginPassword"
                        value={loginFormData.loginPassword}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        helperText={helperText.loginPassword}
                        error={hasError.loginPassword}
                        type="password"
                        variant="filled"
                        label="Password"
                        color="primary"
                        margin="dense"
                    />
                )}
                <Button
                    variant="contained"
                    onClick={
                        currentFieldDisplayed === "email"
                            ? validateEmail
                            : validatePassword
                    }
                    sx={{ marginTop: 1 }}
                >
                    {currentFieldDisplayed === "email" ? "Continue" : "Log In"}
                </Button>
            </Stack>
        </Box>
    );
};

export default LoginForm;
