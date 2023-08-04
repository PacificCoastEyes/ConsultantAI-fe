import { useEffect } from "react";
import Header from "../components/global/Header";
import SignupContent from "../components/Signup/SignupContent";
import Footer from "../components/global/Footer";

const Signup = () => {
    useEffect(() => {
        document.title = "Sign Up | Consultant.AI";
    }, []);

    return (
        <div id="signup" className="page">
            <Header />
            <SignupContent />
            <Footer />
        </div>
    );
};

export default Signup;
