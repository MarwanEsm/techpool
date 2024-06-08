export interface IRegistrationDetails {
    email: string,
    password: string,
    confirmationPassword: string,
    owner: "candidate" | "employer",
    checked: boolean,
}