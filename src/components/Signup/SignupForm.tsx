import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ISignupFormData, ISignupErrorStatus } from "../../models/ISignupForm";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import PasswordStrengthBar from "react-password-strength-bar";

import {
    validateEmail,
    validateRest,
} from "../../utils/validation/SignupValidation";

const SignupForm = () => {
    useEffect(() => {
        document.title = "Signup | Consultant.AI";
    }, []);

    const [signupFormData, setSignupFormData] = useState<ISignupFormData>({
        signupEmail: "",
        signupName: "",
        signupPassword: "",
        signupConfirmPassword: "",
    });

    const [currentFieldDisplayed, setCurrentFieldDisplayed] =
        useState<string>("email");

    const [helperText, setHelperText] = useState<ISignupFormData>({
        signupEmail: "",
        signupName: "",
        signupPassword: "",
        signupConfirmPassword: "",
    });
    const [hasError, setHasError] = useState<ISignupErrorStatus>({
        signupEmail: false,
        signupName: false,
        signupPassword: false,
        signupConfirmPassword: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setHelperText(prevState => {
            return { ...prevState, [e.target.id]: "" };
        });
        setHasError(prevState => {
            return { ...prevState, [e.target.id]: false };
        });
        setSignupFormData(prevState => {
            return { ...prevState, [e.target.id]: e.target.value };
        });
    };

    const handleValidate = (): void => {
        if (currentFieldDisplayed === "email") {
            validateEmail(
                signupFormData.signupEmail,
                setHelperText,
                setHasError,
                setCurrentFieldDisplayed
            );
        } else {
            validateRest(
                signupFormData,
                setHelperText,
                setHasError,
                handleSubmitSignup
            );
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === "Enter") handleValidate();
    };

    const handleSubmitSignup = (): void => {
        alert("passed!");
    };

    return (
        <Box
            id="signup-form"
            width={{ xs: "100%", md: "70%" }}
            padding={3}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems={{ xs: "flex-start", sm: "center" }}
            sx={{
                backgroundImage:
                    "url(https://consultantaistorage.blob.core.windows.net/assets/images/auth-form-background.jpg)",
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
            <Typography variant="h4">Sign Up</Typography>
            <Typography marginTop={1}>
                Already have a Consultant.AI account?{" "}
                <Link to="/login">Log in</Link>
            </Typography>
            <Stack>
                {currentFieldDisplayed === "email" && (
                    <TextField
                        id="signupEmail"
                        type="email"
                        value={signupFormData.signupEmail}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        placeholder="name@company.com"
                        helperText={helperText.signupEmail}
                        error={hasError.signupEmail}
                        variant="filled"
                        label="Email"
                        color="primary"
                        margin="dense"
                    />
                )}
                {currentFieldDisplayed === "rest" && (
                    <>
                        <TextField
                            id="signupName"
                            value={signupFormData.signupName}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            helperText={helperText.signupName}
                            error={hasError.signupName}
                            variant="filled"
                            label="Full Name"
                            color="primary"
                            margin="dense"
                        />
                        <TextField
                            id="signupPassword"
                            value={signupFormData.signupPassword}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            helperText={helperText.signupPassword}
                            error={hasError.signupPassword}
                            type="password"
                            variant="filled"
                            label="Password"
                            color="primary"
                            margin="dense"
                        />
                        <PasswordStrengthBar
                            password={signupFormData.signupPassword}
                            minLength={0}
                            scoreWords={[
                                "Weak",
                                "Weak",
                                "Okay",
                                "Good",
                                "Strong",
                            ]}
                            style={{
                                fontFamily:
                                    "'Outfit', Arial, Helvetica, sans-serif",
                            }}
                        />
                        <TextField
                            id="signupConfirmPassword"
                            value={signupFormData.signupConfirmPassword}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            helperText={helperText.signupConfirmPassword}
                            error={hasError.signupConfirmPassword}
                            type="password"
                            variant="filled"
                            label="Confirm Password"
                            color="primary"
                            margin="dense"
                        />
                    </>
                )}
                <Button
                    variant="contained"
                    onClick={handleValidate}
                    sx={{ marginTop: 1 }}
                >
                    {currentFieldDisplayed === "email" ? "Continue" : "Sign Up"}
                </Button>
            </Stack>
        </Box>
    );
};

export default SignupForm;
