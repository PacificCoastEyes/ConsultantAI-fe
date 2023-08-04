export interface ISignupFormData {
    signupEmail: string;
    signupName: string;
    signupPassword: string;
    signupConfirmPassword: string;
}

export interface ISignupErrorStatus {
    signupEmail: boolean;
    signupName: boolean;
    signupPassword: boolean;
    signupConfirmPassword: boolean;
}
