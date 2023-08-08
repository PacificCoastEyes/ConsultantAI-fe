import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import { Box, CircularProgress } from "@mui/material";

const Loading = () => {
    return (
        <div className="page">
            <Header />
            <Box display="flex" justifyContent="center" alignItems="center">
                <CircularProgress color="primary" size={100} />
            </Box>
            <Footer />
        </div>
    );
};

export default Loading;
