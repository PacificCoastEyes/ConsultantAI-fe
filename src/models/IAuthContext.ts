import { Dispatch, SetStateAction } from "react";

export interface IActiveUser {
    firstName: string;
    isAdmin: boolean;
}

export interface IAuthContext {
    isLoggedIn: boolean;
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
    activeUser: IActiveUser;
    setActiveUser: Dispatch<SetStateAction<IActiveUser>>;
}
