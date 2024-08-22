import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEnvelope, faKey, faBuilding, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import {serverURL} from '../config';
import styles from "./RegistrationForm.module.scss"
import { IRegistrationDetails } from "@/types/forms";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";



//TODO: validate the email address and password

const RegistrationForm = () => {
    const [state, setState] = useState<IRegistrationDetails>({
        email: "",
        password: "",
        confirmationPassword: "",
        linkedIn: "",
        github: "",
        owner: "",
        checked: false
    });

    console.log(state);


    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        setState({ ...state, [e.target.name]: e.target.value });
    };
    // const handleDropDown = (e) => {
    //     e.preventDefault();
    //     setState({ ...state, owner: e.target.value });
    // };

    // const submitDetails = (e) => {
    //     e.preventDefault();
    //     if (
    //         state.email === "" ||
    //         state.password === "" ||
    //         state.confirmationPassword !== state.password ||
    //         state.owner === "" ||
    //         !checked
    //     ) {
    //         alert("Please fill in all required fields");
    //     } else {
    //         fetch(`${serverURL}auth/register`, {
    //             method: "post",
    //             headers: {
    //                 Accept: "application/json, text/plain, */*",
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(state),
    //         })
    //             .then((res) => res.json())
    //             .then((res) => {
    //                 console.log(res);
    //                 if (res.success) {
    //                     alert(res.msg);
    //                 } else {
    //                     alert(res.msg);
    //                 }
    //             });
    //     }
    // };


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
                        onChange={(e) => handleChange(e)}
                        value={state.email}
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
                        onChange={(e) => handleChange(e)}
                        value={state.password}
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
                        onChange={(e) => handleChange(e)}
                        name="confirmationPassword"
                        value={state.confirmationPassword}
                        required
                    />
                </div>

                <div className={styles.inputContainer}>
                    <select name="owner" defaultValue="Choose..."
                        onChange={(e) => handleChange(e)}
                    >
                        <option value="candidate">Candidate</option>
                        <option value="employer">Employer</option>
                    </select>
                </div>

                <ul className={styles.socialMedia}>
                    <li>
                        <FontAwesomeIcon icon={faLinkedin} className={styles.socialMediaIcon} />
                        <input type="text" placeholder="LinkedIn" onChange={(e) => handleChange(e)} />
                    </li>

                    <li>
                        <FontAwesomeIcon icon={faGithub} className={styles.socialMediaIcon} />
                        <input type="text" placeholder="Github" onChange={(e) => handleChange(e)} />
                    </li>
                </ul>

                <div className={styles.checkboxContainer}>
                    <input
                        id="checkbox"
                        type="checkbox"
                        name="checkbox"
                        defaultChecked={false}
                        // value={checked}
                        onChange={(e) => setState({ ...state, checked: e.target.checked })}
                    />
                    <label>Agree to the Fine Print</label>
                </div>
            </form>
            <button> Sign up</button>
        </div>
    );
}









export default RegistrationForm;
