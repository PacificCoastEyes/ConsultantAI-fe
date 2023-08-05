import { Dispatch, SetStateAction } from "react";
import { ISignupFormData, ISignupErrorStatus } from "../../models/ISignupForm";

export const validateEmail = (
    signupEmail: string,
    setHelperText: Dispatch<SetStateAction<ISignupFormData>>,
    setHasError: Dispatch<SetStateAction<ISignupErrorStatus>>,
    setCurrentFieldDisplayed: Dispatch<SetStateAction<string>>
): void => {
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
        setCurrentFieldDisplayed("rest");
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
