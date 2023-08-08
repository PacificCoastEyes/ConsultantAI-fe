import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "../../utils/AxiosInstance";
import { Button, CircularProgress, Stack, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

import { logUserOut } from "../../utils/logUserOut";

const NavMenu = () => {
    const authContext = useContext(AuthContext);
    const { isLoggedIn, setIsLoggedIn, activeUser, setActiveUser } =
        authContext!;
    const { firstName } = activeUser;

    const [isLoggingOut, setIsLoggingOut] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleLogout = async () => {
        setIsLoggingOut(true);
        try {
            await axios.get("/logout", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "authToken"
                    )}`,
                },
            });
        } catch (err) {
            console.error(err);
        } finally {
            logUserOut(setIsLoggedIn, setActiveUser);
            setIsLoggingOut(false);
            navigate("/logout");
        }
    };

    return (
        <Stack direction="row">
            {isLoggedIn ? (
                <>
                    <Stack
                        direction="row"
                        alignItems="center"
                        marginRight={{ xs: 0.5, md: 2 }}
                    >
                        <AccountCircle
                            sx={{
                                width: { xs: "20px", md: "30px" },
                                height: { xs: "20px", md: "30px" },
                                marginRight: { xs: 0.5, md: 1 },
                            }}
                        />
                        <Typography color="white">{firstName}</Typography>
                    </Stack>
                    <Button
                        onClick={handleLogout}
                        disabled={isLoggingOut ? true : false}
                        variant="contained"
                        color="secondary"
                        sx={{
                            width: "90px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        {isLoggingOut ? (
                            <CircularProgress
                                color="secondary"
                                thickness={5}
                                size="1.75em"
                            />
                        ) : (
                            "Logout"
                        )}
                    </Button>
                </>
            ) : (
                <>
                    <NavLink to="/signup">
                        <Button variant="contained" color="secondary">
                            Sign Up
                        </Button>
                    </NavLink>
                    <NavLink to="/login">
                        <Button variant="contained" color="secondary">
                            Log In
                        </Button>
                    </NavLink>
                </>
            )}
        </Stack>
    );
};

export default NavMenu;
