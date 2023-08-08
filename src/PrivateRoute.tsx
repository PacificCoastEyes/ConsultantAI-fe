import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "./contexts/AuthContext";
import axios from "./utils/AxiosInstance";
import Loading from "./pages/Loading";
import { Navigate } from "react-router-dom";
import { IAuthContext } from "./models/IAuthContext";

const PrivateRoute = ({
    userShouldBe,
    children,
}: {
    userShouldBe: string;
    children: React.PropsWithChildren<JSX.Element>;
}): JSX.Element => {
    const authContext = useContext(AuthContext);
    const { isLoggedIn, setIsLoggedIn, setActiveUser } =
        authContext as IAuthContext;

    const [isValidatingToken, setIsValidatingToken] = useState<boolean>(true);

    const validateToken = useCallback(async () => {
        try {
            const res = await axios.get("/validate-token", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "authToken"
                    )}`,
                },
            });
            const { valid, user } = await res.data;
            if (valid) {
                const firstName = user.name.split(" ")[0];
                const { isAdmin } = user;
                setActiveUser({ firstName, isAdmin }); // Restores user in context if page is refreshed / app is restarted
                setIsLoggedIn(true);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setIsValidatingToken(false);
        }
    }, [setActiveUser, setIsLoggedIn]);

    useEffect(() => {
        validateToken();
    }, [validateToken]);

    if (isValidatingToken) {
        return <Loading />;
    } else {
        if (userShouldBe === "loggedIn") {
            return isLoggedIn ? children : <Navigate to="/login" />;
        } else if (userShouldBe === "loggedOut") {
            return isLoggedIn ? <Navigate to="/dashboard" /> : children;
        } else {
            return <Navigate to="/" />;
        }
    }
};

export default PrivateRoute;
