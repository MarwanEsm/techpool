import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <div className={styles.footer}>
            <Link href="https://www.facebook.com/profile.php?id=100014692329207">
                <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link href="https://twitter.com/MarwanAbouEsmaa">
                <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link href="https://www.linkedin.com/in/marwan-esmaail/">
                <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link href="https://github.com/MarwanEsm">
                <FontAwesomeIcon icon={faGithub} />
            </Link>
        </div>
    );
}

export default Footer;
