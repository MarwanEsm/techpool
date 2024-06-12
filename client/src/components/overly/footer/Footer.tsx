import React from "react";
import styles from "./Footer.module.scss"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    const handelClick = () => {
        // window.location = "mailto:support@bbbootstrap.com";
        // e.preventDefault();
    };

    return (
        <div>
            <footer className={styles.footer}>

                <p className={styles.links}>
                    <Link href="/">Home</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/jobs">Jobs</Link>
                    <Link href="/contact">Contact</Link>
                </p>

                <div>
                    <div>
                        {/* //TODO:add google map card <a
                                href="https://www.google.com/maps/place/Adolfstra%C3%9Fe+24,+13347+Berlin/@52.5473488,13.364106,16.74z/data=!4m5!3m4!1s0x47a8518757f35721:0x8bbf69003c9cb31d!8m2!3d52.5474121!4d13.3665791"
                                className="fa fa-map-marker footer-contacts-icon"
                                target="_blank"
                            >

                            </a> */}

                    </div>

                    {/* <div>
                        <FontAwesomeIcon icon={faPhone} />
                        <p>+49 15755076336</p>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p onClick={handelClick}>support@bbbootstrap.com</p>
                    </div> */}
                </div>

                <div className={styles.icon}>
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

            </footer>
        </div>
    );
}



export default Footer;
