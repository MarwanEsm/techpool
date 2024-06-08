import React, { useState } from "react";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEnvelope, faLock, faKey, faBuilding, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import {serverURL} from '../config';
import { Button } from "reactstrap";
import styles from "./RegistrationForm.module.scss"
import { IRegistrationDetails } from "@/types/forms";
import { faFacebook, faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";



const RegistrationForm = () => {
    const [state, setState] = useState<IRegistrationDetails>({
        email: "",
        password: "",
        confirmationPassword: "",
        owner: "candidate",
        checked: false,
    });

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    // const handleChange = (e) => {
    //     e.preventDefault();
    //     setState({ ...state, [e.target.name]: e.target.value });
    // };

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
                        // onChange={handleChange}
                        value={state.email}
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
                        // onChange={handleChange}
                        value={state.password}
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
                        // onChange={handleChange}
                        name="confirmationPassword"
                        value={state.confirmationPassword}
                    />
                </div>

                <div className={styles.inputContainer}>
                    <div className={styles.icon}>
                        <FontAwesomeIcon icon={faBuilding} />
                    </div>
                    <select name="owner" defaultValue="Choose...">
                        <option value="candidate">Candidate</option>
                        <option value="employer">Employer</option>
                    </select>
                </div>

                <div className={styles.checkboxContainer}>
                    <input
                        id="checkbox"
                        type="checkbox"
                        name="checkbox"
                        defaultChecked={false}
                    // value={checked}
                    // onChange={() => setChecked(!checked)}
                    />
                    <label>Agree to the Fine Print</label>
                </div>

                <button> Sign up</button>

                <div className="connect border-bottom mt-4 mb-4"></div>

                <div>
                    <Link href={"/google"}>
                        <FontAwesomeIcon icon={faFacebook} />
                    </Link>


                    <Link href={"/google"}>
                        <FontAwesomeIcon icon={faGoogle} />
                    </Link>


                    <Link href={"github"}>
                        <FontAwesomeIcon icon={faGithub} />
                    </Link>

                </div>

            </form>
        </div>
    );
}









export default RegistrationForm;
