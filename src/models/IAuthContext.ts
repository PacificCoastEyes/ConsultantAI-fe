import { Dispatch, SetStateAction } from "react";
import { IActiveUser } from "./IActiveUser";
export interface IAuthContext {
    isLoggedIn: boolean;
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
    activeUser: IActiveUser;
    setActiveUser: Dispatch<SetStateAction<IActiveUser>>;
}
