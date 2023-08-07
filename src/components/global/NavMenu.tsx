import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { NavLink } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

const NavMenu = () => {
    const authContext = useContext(AuthContext);
    const { isLoggedIn, activeUser } = authContext!;
    const { firstName } = activeUser;

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
                    <NavLink to="/logout">
                        <Button variant="contained" color="secondary">
                            Logout
                        </Button>
                    </NavLink>
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
