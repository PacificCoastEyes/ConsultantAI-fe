import { Dispatch, SetStateAction } from "react";
import axios from "../AxiosInstance";
import { AxiosError } from "axios";
import { ISignupFormData, ISignupErrorStatus } from "../../models/ISignupForm";

export const validateEmail = async (
    signupEmail: string,
    setShowSpinner: Dispatch<SetStateAction<boolean>>,
    setHelperText: Dispatch<SetStateAction<ISignupFormData>>,
    setHasError: Dispatch<SetStateAction<ISignupErrorStatus>>,
    setCurrentFieldDisplayed: Dispatch<SetStateAction<string>>
) => {
    if (!signupEmail) {
        setHelperText(prevState => {
            return {
                ...prevState,
                signupEmail: "Please enter an email address",
            };
        });
        setHasError(prevState => {
            return { ...prevState, signupEmail: true };
        });
    } else if (
        signupEmail &&
        !(signupEmail.includes("@") && signupEmail.includes("."))
    ) {
        setHelperText(prevState => {
            return {
                ...prevState,
                signupEmail: "Please enter a valid email address",
            };
        });
        setHasError(prevState => {
            return { ...prevState, signupEmail: true };
        });
    } else {
        setShowSpinner(true);
        try {
            await axios.post("/check-if-existing-user", { email: signupEmail });
            setCurrentFieldDisplayed("rest");
        } catch (err) {
            setHelperText(prevState => {
                return {
                    ...prevState,
                    signupEmail:
                        err instanceof AxiosError
                            ? err.response
                                ? err.response.data
                                : err.message
                            : "Sorry, there was an error.",
                };
            });
            setHasError(prevState => {
                return { ...prevState, signupEmail: true };
            });
        } finally {
            setShowSpinner(false);
        }
    }
};

export const validateRest = (
    signupFormData: ISignupFormData,
    setHelperText: Dispatch<SetStateAction<ISignupFormData>>,
    setHasError: Dispatch<SetStateAction<ISignupErrorStatus>>,
    handleSubmitSignup: () => void
): void => {
    let fieldsAreNotEmpty = false;
    let passwordsMatch = false;
    fieldsAreNotEmpty = checkForEmptyFields(
        signupFormData,
        setHelperText,
        setHasError
    );
    if (fieldsAreNotEmpty) {
        passwordsMatch = checkPasswordsMatch(
            signupFormData.signupPassword,
            signupFormData.signupConfirmPassword,
            setHelperText,
            setHasError
        );
    }
    if (fieldsAreNotEmpty && passwordsMatch) handleSubmitSignup();
};

const checkForEmptyFields = (
    signupFormData: ISignupFormData,
    setHelperText: Dispatch<SetStateAction<ISignupFormData>>,
    setHasError: Dispatch<SetStateAction<ISignupErrorStatus>>
): boolean => {
    let hasPassed = true;
    Object.keys(signupFormData).forEach(field => {
        if (!signupFormData[field as keyof typeof signupFormData]) {
            setHelperText(prevState => {
                return {
                    ...prevState,
                    [field]: "This field is required",
                };
            });
            setHasError(prevState => {
                return { ...prevState, [field]: true };
            });
            hasPassed = false;
        }
    });
    return hasPassed;
};

const checkPasswordsMatch = (
    signupPassword: string,
    signupConfirmPassword: string,
    setHelperText: Dispatch<SetStateAction<ISignupFormData>>,
    setHasError: Dispatch<SetStateAction<ISignupErrorStatus>>
): boolean => {
    if (signupPassword !== signupConfirmPassword) {
        setHelperText(prevState => {
            return {
                ...prevState,
                signupConfirmPassword: "Passwords do not match",
            };
        });
        setHasError(prevState => {
            return { ...prevState, signupConfirmPassword: true };
        });
        return false;
    }
    return true;
};
