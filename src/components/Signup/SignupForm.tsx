import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "../../utils/AxiosInstance";
import { AxiosError } from "axios";
import { ISignupFormData, ISignupErrorStatus } from "../../models/ISignupForm";
import { IAuthContext } from "../../models/IAuthContext";

import {
    Alert,
    Box,
    Button,
    CircularProgress,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import PasswordStrengthBar from "react-password-strength-bar";

import {
    validateEmail,
    validateRest,
} from "../../utils/validation/SignupValidation";

import { logUserIn } from "../../utils/logUserIn";

const SignupForm = () => {
    useEffect(() => {
        document.title = "Signup | Consultant.AI";
    }, []);

    const authContext = useContext(AuthContext);
    const { setIsLoggedIn, setActiveUser } = authContext as IAuthContext;

    const navigate = useNavigate();

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

    const [showSpinner, setShowSpinner] = useState<boolean>(false);
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>("");

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
                setShowSpinner,
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

    const handleSubmitSignup = async () => {
        const { signupName, signupEmail, signupPassword } = signupFormData;
        setShowSpinner(true);
        setShowAlert(false);
        try {
            const res = await axios.post("/register", {
                name: signupName,
                email: signupEmail,
                password: signupPassword,
            });
            const { authToken, firstName, isAdmin } = res.data;
            logUserIn(
                authToken,
                firstName,
                isAdmin,
                setIsLoggedIn,
                setActiveUser
            );
            navigate("/dashboard");
        } catch (err) {
            console.error(err);
            setAlertMessage(
                err instanceof AxiosError
                    ? err.response
                        ? err.response.data
                        : err.message
                    : "Sorry, there was an error."
            );
            setShowAlert(true);
        } finally {
            setShowSpinner(false);
        }
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
            <Stack width="237px">
                {currentFieldDisplayed === "email" && (
                    <TextField
                        autoFocus
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
                            autoFocus
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
                {showAlert && (
                    <Alert severity="error" sx={{ marginTop: 1 }}>
                        {alertMessage}
                    </Alert>
                )}
                <Button
                    variant="contained"
                    onClick={handleValidate}
                    disabled={showSpinner ? true : false}
                    sx={{ marginTop: 1 }}
                >
                    {showSpinner ? (
                        <CircularProgress
                            color="primary"
                            thickness={5}
                            size="1.75em"
                        />
                    ) : currentFieldDisplayed === "email" ? (
                        "Continue"
                    ) : (
                        "Sign Up"
                    )}
                </Button>
            </Stack>
        </Box>
    );
};

export default SignupForm;
