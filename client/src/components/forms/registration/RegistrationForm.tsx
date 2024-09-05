import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEnvelope, faKey, faBuilding, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import styles from "./RegistrationForm.module.scss";
import { IRegistrationDetails } from "@/types/forms";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
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

    return (
        <div className={styles.wrapper} >
            <form action="post">
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
            </form>
            <button disabled={!termsAccepted}>Sign up</button>
        </div>
    );
}

export default RegistrationForm;
