import { createContext, useState } from "react";
import { IAuthContext } from "../models/IAuthContext";
import { IActiveUser } from "../models/IActiveUser";

export const AuthContext = createContext<IAuthContext | null>(null);

const AuthContextProvider = ({ children }: React.PropsWithChildren) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [activeUser, setActiveUser] = useState<IActiveUser>({
        firstName: "User",
        isAdmin: false,
    });

    return (
        <AuthContext.Provider
            value={{ isLoggedIn, setIsLoggedIn, activeUser, setActiveUser }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
