import React, { useState } from "react";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEnvelope, faLock, faKey, faBuilding } from "@fortawesome/free-solid-svg-icons";
// import {serverURL} from '../config';
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
    const eyeIcon = passwordShown ? (
        <FontAwesomeIcon icon={faEye} />
    ) : (
        <span className="fas fa-eye-slash"></span>
    );
    const eye = <FontAwesomeIcon icon={faEye} />;

    return (
        <div className={styles.wrapper} >

            <form action="post">
                <h4>Get Onboard</h4>

                <div>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <input
                        autoComplete="off"
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        // onChange={handleChange}
                        value={state.email}
                    />
                </div>

                <div className="form-group d-flex align-items-center">
                    <FontAwesomeIcon icon={faLock} />
                    <input
                        autoComplete="off"
                        className="form-control"
                        placeholder="Create password"
                        type={passwordShown ? "text" : "password"}
                        name="password"
                        // onChange={handleChange}
                        value={state.password}
                    />
                    <div className="icon btn">
                        <span onClick={togglePasswordVisibility}>{eyeIcon}</span>
                    </div>
                </div>

                <div className="form-group d-flex align-items-center">
                    <FontAwesomeIcon icon={faKey} />
                    <input
                        autoComplete="off"
                        className="form-control"
                        placeholder="Repeat password"
                        type="password"
                        // onChange={handleChange}
                        name="confirmationPassword"
                        value={state.confirmationPassword}
                    />
                </div>
                <div className="form-group d-flex align-items-center">
                    <FontAwesomeIcon icon={faBuilding} />
                    <select
                        className="form-control"
                        name="owner"
                        defaultValue="Choose..."
                    >
                        <option value="candidate">
                            Candidate
                        </option>
                        <option value="employer">
                            Employer
                        </option>
                    </select>
                </div>

                <Form.Group id="formGridCheckbox">
                    <div
                        className="custom-control custom-checkbox custom-control-inline"
                    >
                        <input
                            id="checkbox"
                            type="checkbox"
                            name="checkbox"
                            className="custom-control-input"
                            defaultChecked={false}
                        // value={checked}
                        // onChange={() => setChecked(!checked)}
                        />
                        <label
                            className="custom-control-label consent"
                        >
                            Agree to terms and conditions
                        </label>
                    </div>
                </Form.Group>

                <div
                    className="btn btn-primary mb-3"
                // onClick={submitDetails}

                >
                    Sign up
                </div>
                <div className="terms mb-2" style={termsStyle}>
                    By clicking Sign up, you acknowledge that you have read the
                    {/* <Link href={"/"}>Privacy Policy</Link> and agree to the
                    <Link href="#">Terms of Service</Link>. */}
                </div>
                <div className="connect border-bottom mt-4 mb-4" style={orStyle}></div>

                <Link href={"/google"}>
                    <FontAwesomeIcon icon={faFacebook} />
                </Link>


                <Link href={"/google"}>
                    <FontAwesomeIcon icon={faGoogle} />
                </Link>


                <Link href={"github"}>
                    <FontAwesomeIcon icon={faGithub} />
                </Link>


            </form>
        </div>
    );
}







const termsStyle = {
    color: "gray",
};

const orStyle = {
    background: "-webkit-linear-gradient(right, #acabcc, #55b6ee)",
};


export default RegistrationForm;
