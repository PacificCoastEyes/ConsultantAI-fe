import { Dispatch, SetStateAction } from "react";
import { IActiveUser } from "../models/IAuthContext";

export const logUserIn = (
    authToken: string,
    firstName: string,
    isAdmin: boolean,
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>,
    setActiveUser: Dispatch<SetStateAction<IActiveUser>>
) => {
    localStorage.setItem("authToken", authToken);
    setIsLoggedIn(true);
    setActiveUser({
        firstName,
        isAdmin,
    });
};
