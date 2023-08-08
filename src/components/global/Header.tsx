import { useEffect, useState } from "react";
import { Alert, AppBar, Box, Snackbar, Toolbar } from "@mui/material";
import "../../styles/components/Header.css";

import Logo from "./Logo";
import NavMenu from "./NavMenu";

const Header = ({ isLoggedOut }: { isLoggedOut?: boolean }) => {
    const [showLogoutSnackbar, setShowLogoutSnackbar] =
        useState<boolean>(false);

    useEffect(() => {
        if (isLoggedOut) setShowLogoutSnackbar(true);
    }, [isLoggedOut]);

    return (
        <Box id="header">
            <AppBar color="primary">
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingX: {
                            xs: 1,
                            sm: 3,
                        },
                    }}
                >
                    <Logo />
                    <NavMenu />
                </Toolbar>
            </AppBar>
            {isLoggedOut && (
                <Snackbar
                    open={showLogoutSnackbar}
                    onClose={() => setShowLogoutSnackbar(false)}
                    autoHideDuration={5000}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    sx={{ marginTop: "60px" }}
                >
                    <Alert severity="success" variant="filled">
                        You have successfully logged out
                    </Alert>
                </Snackbar>
            )}
        </Box>
    );
};

export default Header;
