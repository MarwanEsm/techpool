import { useState } from "react"
import styles from "./ForgotPassword.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

interface IForgotPasswordProps {
    onClick: () => void
}
const ForgotPassword = (props: IForgotPasswordProps) => {

    const [email, setEmail] = useState({
        email: "",
    })
    return <div className={styles.wrapper}>
        <form action="submit">
            <div className={styles.inputContainer}>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <input
                    autoComplete="off"
                    type="email"
                    placeholder="Email"
                    name="email"
                    // onChange={(e) => handleChange(e)}
                    value={email.email}
                />
            </div>

            <button>Send Email</button>
            <label onClick={props.onClick}>
                Back to Login
            </label>
        </form>
    </div>
}

export default ForgotPassword 