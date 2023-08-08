import { useEffect } from "react";
import Header from "../components/global/Header";
import Hero from "../components/Home/Hero";
import Footer from "../components/global/Footer";

const Home = ({ isLoggedOut }: { isLoggedOut?: boolean }) => {
    useEffect(() => {
        document.title = isLoggedOut
            ? "Logged Out | Consultant.AI"
            : "Consultant.AI";
    }, [isLoggedOut]);

    return (
        <div id="home" className="page">
            <Header isLoggedOut={isLoggedOut} />
            <Hero />
            <Footer />
        </div>
    );
};

export default Home;
