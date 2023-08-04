import { Dispatch, SetStateAction } from "react";

export interface IAuthContext {
    isLoggedIn: boolean;
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}
