import styles from "./CandidateCard.module.scss"
import classNames from "classnames"
import Image from "next/image"
import { ICandidateProps } from "@/types/candidates"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";


const CandidateCard = (props: ICandidateProps) => {

    return <div className="container">

        <div className={styles.cardWrapper}>
            <div className={"col-md-6 col-sm-8 col-lg-4"}>
                <div className={classNames(styles.card, "single_advisor_profile wow fadeInUp")}
                    data-wow-delay="0.2s"
                >
                    <div className="advisor_thumb" key={props.candidate.id}>
                        <Image
                            // src={`${serverURL}${candidate.img}`}
                            width={240}
                            height={200}
                            src={props.candidate.image}
                            alt={props.candidate.first_name}
                        />

                        <div className="social-info">
                            <Link href={props.candidate.facebook} target="_blank">
                                <FontAwesomeIcon icon={faFacebook} />
                            </Link>

                            <Link href={`https://www.twitter.com/${props.candidate.twitter}`} target="_blank">
                                <FontAwesomeIcon icon={faTwitter} />
                            </Link>

                            <Link href={`https://www.instagram.com/${props.candidate.instagram}`} target="_blank">
                                <FontAwesomeIcon icon={faInstagram} />
                            </Link>
                        </div>
                    </div>

                    <div className="single_advisor_details_info">
                        <h6 >
                            {props.candidate.first_name} {props.candidate.last_name}
                        </h6>
                        <p className="designation" > {props.candidate.title} </p>

                        <p className="designation" ><b>{props.candidate.location}</b> </p>

                        <span className={classNames(styles.span, "btn btn-primary btn-block")}
                        // onClick={handelReadMore}
                        >
                            Read more
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}


export default CandidateCard