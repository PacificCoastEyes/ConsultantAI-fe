import { Link } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box
            id="footer"
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems="center"
            paddingX={3}
        >
            <Stack direction="row">
                <Link to="#">
                    <Typography marginRight={1}>Terms of Service</Typography>
                </Link>
                <Typography>|</Typography>
                <Link to="#">
                    <Typography marginLeft={1}>Privacy Policy</Typography>
                </Link>
            </Stack>
            <Typography>
                &copy; {new Date().getFullYear()} Consultant.AI
            </Typography>
        </Box>
    );
};

export default Footer;
