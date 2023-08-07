import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "../../utils/AxiosInstance";
import { AxiosError } from "axios";
import { ILoginFormData, ILoginErrorStatus } from "../../models/ILoginForm";
import { IAuthContext } from "../../models/IAuthContext";
import {
    Alert,
    Box,
    Button,
    CircularProgress,
    IconButton,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

import {
    validateEmail,
    validatePassword,
} from "../../utils/validation/LoginValidation";

import { logUserIn } from "../../utils/logUserIn";

const LoginForm = () => {
    const authContext = useContext(AuthContext);
    const { setIsLoggedIn, setActiveUser } = authContext as IAuthContext;

    const navigate = useNavigate();

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
        setLoginFormData(prevState => {
            return { ...prevState, [e.target.id]: e.target.value };
        });
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === "Enter") handleValidate();
    };

    const handleValidate = (): void => {
        if (currentFieldDisplayed === "email") {
            validateEmail(
                loginFormData.loginEmail,
                setHelperText,
                setHasError,
                setCurrentFieldDisplayed
            );
        } else {
            validatePassword(
                loginFormData.loginPassword,
                setHelperText,
                setHasError,
                handleSubmitLogin
            );
        }
    };

    const handleSubmitLogin = async () => {
        const { loginEmail, loginPassword } = loginFormData;
        setShowSpinner(true);
        setShowAlert(false);
        try {
            const res = await axios.post("/login", {
                email: loginEmail,
                password: loginPassword,
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
            id="login-form"
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
            <Typography variant="h4">Log In</Typography>
            <Typography marginTop={1}>
                New to Consultant.AI? <Link to="/signup">Sign up</Link>
            </Typography>
            <Stack width="237px">
                {currentFieldDisplayed === "email" && (
                    <TextField
                        autoFocus
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
                        autoFocus
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
                {showAlert && (
                    <Stack
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="center"
                    >
                        {currentFieldDisplayed === "password" && (
                            <IconButton
                                onClick={() =>
                                    setCurrentFieldDisplayed("email")
                                }
                                sx={{ marginRight: 1 }}
                            >
                                <ArrowBack />
                            </IconButton>
                        )}
                        <Alert severity="error" sx={{ marginTop: 1 }}>
                            {alertMessage}
                        </Alert>
                    </Stack>
                )}
                <Button
                    variant="contained"
                    onClick={handleValidate}
                    sx={{ marginTop: 1 }}
                >
                    {showSpinner ? (
                        <CircularProgress
                            color="secondary"
                            thickness={5}
                            size="1.75em"
                        />
                    ) : currentFieldDisplayed === "email" ? (
                        "Continue"
                    ) : (
                        "Log In"
                    )}
                </Button>
            </Stack>
        </Box>
    );
};

export default LoginForm;
