import { useEffect } from "react";
import Header from "../components/global/Header";
import DashboardContent from "../components/Dashboard/DashboardContent";
import Footer from "../components/global/Footer";

const Dashboard = () => {
    useEffect(() => {
        document.title = "Welcome | Consultant.AI";
    }, []);

    return (
        <div id="dashboard" className="page">
            <Header />
            <DashboardContent />
            <Footer />
        </div>
    );
};

export default Dashboard;
