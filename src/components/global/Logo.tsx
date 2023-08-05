import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const Logo = () => {
    return (
        <Link id="logo" to="/">
            <Box display="flex" alignItems="center">
                <img
                    src="https://consultantaistorage.blob.core.windows.net/assets/images/logo-icon.png"
                    alt="Consultant.AI logo"
                />
                <Typography
                    variant="h1"
                    fontSize={{ xs: "1.2em", md: "2em" }}
                    fontFamily="'Unica One', Arial, Helvetica, sans-serif"
                    color="white"
                    marginLeft={1}
                    sx={{ textTransform: "uppercase" }}
                >
                    Consultant.AI
                </Typography>
            </Box>
        </Link>
    );
};

export default Logo;
