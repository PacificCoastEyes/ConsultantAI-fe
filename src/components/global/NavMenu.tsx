import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { NavLink } from "react-router-dom";
import { Button, Stack } from "@mui/material";

const NavMenu = () => {
    const authContext = useContext(AuthContext);
    const { isLoggedIn } = authContext!;

    return (
        <Stack direction="row">
            {isLoggedIn ? (
                <NavLink to="/logout">
                    <Button variant="contained" color="secondary">
                        Logout
                    </Button>
                </NavLink>
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
