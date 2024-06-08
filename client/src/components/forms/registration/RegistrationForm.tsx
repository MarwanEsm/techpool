import React, { useState } from "react";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
// import {serverURL} from '../config';
import styles from "./RegistrationForm.module.scss"
const RegistrationForm = () => {
    const [state, setState] = useState({
        email: "",
        password: "",
        confirmationPassword: "",
        owner: "candidate",
        checked: false,
    });

    const [checked, setChecked] = useState();

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
            <form action="#">
                <div className="h5 font-weight-bold text-center mb-3">Registration</div>

                <div className="form-group d-flex align-items-center">
                    <div className="icon">
                        <span className="far fa-envelope"></span>
                    </div>
                    <input
                        // autocomplete="off"
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        // onChange={handleChange}
                        value={state.email}
                    />
                </div>

                <div className="form-group d-flex align-items-center">
                    <div className="icon">
                        <span className="fa fa-lock"></span>
                    </div>
                    <input
                        // autocomplete="off"
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
                    <div className="icon">
                        <span className="fas fa-key"></span>
                    </div>
                    <input
                        // autocomplete="off"
                        className="form-control"
                        placeholder="Repeat password"
                        type="password"
                        // onChange={handleChange}
                        name="confirmationPassword"
                        value={state.confirmationPassword}
                    />
                </div>
                <div className="form-group d-flex align-items-center">
                    <div className="icon">
                        <span className="fas fa-building"></span>
                    </div>
                    <select
                        className="form-control"
                        name="owner"
                        // as="select"
                        // onChange={handleDropDown}
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
                            id="chk1"
                            type="checkbox"
                            name="chk"
                            className="custom-control-input"
                            defaultChecked={false}
                            value={checked}
                        // onChange={() => setChecked(!checked)}
                        />
                        <label
                            // for="chk1"
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
                <ul className="p-0 social-links">
                    <li>
                        {/* <Link to="#">
                            <span className="fab fa-facebook-f"></span>
                        </Link> */}
                    </li>
                    <li>
                        {/* <Link to="#">
                            <span className="fab fa-google"></span>
                        </Link> */}
                    </li>
                    {/* <li>
                        <Link to="#">
                            <span className="fab fa-github"></span>
                        </Link>
                    </li> */}
                </ul>
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
