import { useEffect } from "react";
import Header from "../components/global/Header";
import Hero from "../components/Home/Hero";
import Footer from "../components/global/Footer";

const Home = ({ isLoggedOut }: { isLoggedOut?: boolean }) => {
    useEffect(() => {
        document.title = "Consultant.AI";
    }, []);

    return (
        <div id="home" className="page">
            <Header />
            <Hero />
            <Footer />
        </div>
    );
};

export default Home;
