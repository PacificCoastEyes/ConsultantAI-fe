import { Dispatch, SetStateAction } from "react";
import { IActiveUser } from "../models/IActiveUser";

export const logUserOut = (
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>,
    setActiveUser: Dispatch<SetStateAction<IActiveUser>>
) => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    setActiveUser({
        firstName: "User",
        isAdmin: false,
    });
};
