import { Dispatch, SetStateAction } from "react";
import { ILoginFormData, ILoginErrorStatus } from "../../models/ILoginForm";

export const validateEmail = (
    loginEmail: string,
    setHelperText: Dispatch<SetStateAction<ILoginFormData>>,
    setHasError: Dispatch<SetStateAction<ILoginErrorStatus>>,
    setCurrentFieldDisplayed: Dispatch<SetStateAction<string>>
): void => {
    if (!loginEmail) {
        setHelperText(prevState => {
            return {
                ...prevState,
                loginEmail: "Please enter an email address",
            };
        });
        setHasError(prevState => {
            return { ...prevState, loginEmail: true };
        });
    } else if (
        loginEmail &&
        !(loginEmail.includes("@") && loginEmail.includes("."))
    ) {
        setHelperText(prevState => {
            return {
                ...prevState,
                loginEmail: "Please enter a valid email address",
            };
        });
        setHasError(prevState => {
            return { ...prevState, loginEmail: true };
        });
    } else {
        setCurrentFieldDisplayed("password");
    }
};

export const validatePassword = (
    loginPassword: string,
    setHelperText: Dispatch<SetStateAction<ILoginFormData>>,
    setHasError: Dispatch<SetStateAction<ILoginErrorStatus>>,
    handleSubmitLogin: () => void
): void => {
    if (!loginPassword) {
        setHelperText(prevState => {
            return {
                ...prevState,
                loginPassword: "Please enter a password",
            };
        });
        setHasError(prevState => {
            return { ...prevState, loginPassword: true };
        });
    } else {
        handleSubmitLogin();
    }
};
