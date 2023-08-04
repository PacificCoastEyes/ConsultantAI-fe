import { createContext, useState } from "react";
import { IAuthContext } from "../models/IAuthContext";

export const AuthContext = createContext<IAuthContext | null>(null);

const AuthContextProvider = ({ children }: React.PropsWithChildren) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
