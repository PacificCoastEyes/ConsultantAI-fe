import { useEffect } from "react";
import Header from "../components/global/Header";
import LoginContent from "../components/Login/LoginContent";
import Footer from "../components/global/Footer";

const Login = () => {
    useEffect(() => {
        document.title = "Log In | Consultant.AI";
    }, []);

    return (
        <div id="login" className="page">
            <Header />
            <LoginContent />
            <Footer />
        </div>
    );
};

export default Login;
