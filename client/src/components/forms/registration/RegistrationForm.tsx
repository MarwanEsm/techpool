import { IRegistrationDetails } from "@/types/forms";
import { faEnvelope, faEye, faEyeSlash, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styles from "./RegistrationForm.module.scss";

const RegistrationForm = () => {
    const [registrationDetails, setRegistrationDetails] = useState<IRegistrationDetails>({
        email: "",
        password: "",
        confirmationPassword: "",
        linkedIn: "",
        github: "",
        owner: "",
    });

    const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        setRegistrationDetails({ ...registrationDetails, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = () => {
        setTermsAccepted(!termsAccepted);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (registrationDetails.password !== registrationDetails.confirmationPassword) {
            alert("Passwords do not match!");
            return;
        }
        try {
            const response = await fetch("http://localhost:8080/api/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: registrationDetails.email,
                    password: registrationDetails.password,
                    linkedIn: registrationDetails.linkedIn,
                    github: registrationDetails.github,
                    owner: registrationDetails.owner,
                }),
            });
            if (response.ok) {
                alert("User registered successfully!");
            } else {
                alert("Registration failed!");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred during registration.");
        }
    };

    return (
        <div className={styles.wrapper} >
            <form onSubmit={handleSubmit}>
                <h4>Get Onboard</h4>
                <div className={styles.inputContainer}>
                    <div className={styles.icon}>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <input
                        autoComplete="off"
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        value={registrationDetails.email}
                        required
                    />
                </div>

                <div className={styles.inputContainer}>
                    <div className={styles.icon} onClick={togglePasswordVisibility}>
                        <FontAwesomeIcon icon={!passwordShown ? faEyeSlash : faEye} />
                    </div>
                    <input
                        autoComplete="off"
                        placeholder="Create password"
                        type={passwordShown ? "text" : "password"}
                        name="password"
                        onChange={handleChange}
                        value={registrationDetails.password}
                        required
                    />
                </div>

                <div className={styles.inputContainer}>
                    <div className={styles.icon}>
                        <FontAwesomeIcon icon={faKey} />
                    </div>
                    <input
                        autoComplete="off"
                        placeholder="Repeat password"
                        type="password"
                        onChange={handleChange}
                        name="confirmationPassword"
                        value={registrationDetails.confirmationPassword}
                        required
                    />
                </div>

                <div className={styles.inputContainer}>
                    <select name="owner" defaultValue="Choose..." onChange={handleChange}>
                        <option value="candidate">Candidate</option>
                        <option value="employer">Employer</option>
                    </select>
                </div>

                <ul className={styles.socialMedia}>
                    <li>
                        <FontAwesomeIcon icon={faLinkedin} className={styles.socialMediaIcon} />
                        <input type="text" placeholder="LinkedIn" onChange={handleChange} />
                    </li>

                    <li>
                        <FontAwesomeIcon icon={faGithub} className={styles.socialMediaIcon} />
                        <input type="text" placeholder="Github" onChange={handleChange} />
                    </li>
                </ul>

                <div className={styles.checkboxContainer}>
                    <input
                        id="checkbox"
                        type="checkbox"
                        name="checkbox"
                        checked={termsAccepted}
                        onChange={handleCheckboxChange}
                    />
                    <label>Agree to the Fine Print</label>
                </div>
                <button type="submit" disabled={!termsAccepted}>Sign up</button>
            </form>
        </div>
    );
}

export default RegistrationForm;
