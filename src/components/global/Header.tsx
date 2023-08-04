import { AppBar, Box, Toolbar } from "@mui/material";
import "../../styles/components/Header.css";

import Logo from "./Logo";
import NavMenu from "./NavMenu";

const Header = () => {
    return (
        <Box id="header">
            <AppBar color="primary">
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingX: {
                            xs: 0,
                            sm: 3,
                        },
                    }}
                >
                    <Logo />
                    <NavMenu />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
