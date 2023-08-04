import { NavLink } from "react-router-dom";
import { Button, Stack } from "@mui/material";

const NavMenu = () => {
    return (
        <Stack direction="row">
            <NavLink to="/signup">
                <Button variant="contained" color="secondary">
                    Sign Up
                </Button>
            </NavLink>
            <NavLink to="/login">
                <Button variant="contained" color="secondary">
                    Login
                </Button>
            </NavLink>
        </Stack>
    );
};

export default NavMenu;
