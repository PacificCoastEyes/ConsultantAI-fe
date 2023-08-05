import { Box, Typography } from "@mui/material";

const Hero = () => {
    return (
        <Box
            id="hero"
            padding={3}
            display="flex"
            justifyContent={{ xs: "center", md: "flex-start" }}
            alignItems="center"
            sx={{
                backgroundImage:
                    "url(https://consultantaistorage.blob.core.windows.net/assets/images/home-hero.jpg)",
                backgroundSize: "cover",
                backgroundPositionX: "65%",
                backgroundPositionY: "40%",
            }}
        >
            <Box
                minWidth={{ md: "475px" }}
                maxWidth={{ md: "30%" }}
                marginLeft={{ md: "10%" }}
                padding={3}
                sx={{
                    backgroundColor: "rgba(246, 183, 55, 0.5)",
                    borderRadius: "10px",
                }}
            >
                <Typography
                    variant="h2"
                    color="white"
                    textAlign={{ xs: "center", md: "right" }}
                >
                    Your personal project advisor
                </Typography>
            </Box>
        </Box>
    );
};

export default Hero;
