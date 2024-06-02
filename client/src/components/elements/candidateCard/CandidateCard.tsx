import styles from "./CandidateCard.module.scss"
import classNames from "classnames"
import { ICandidateProps } from "@/types/candidates"
import Image from "next/image"

const CandidateCard = (props: ICandidateProps) => {

    return <div className="container">

        <div className={styles.cardWrapper}>

            <div className={classNames(styles.card, "col-12 col-sm-6 col-lg-3")}>

                <div className={classNames(styles.innerCard, "single_advisor_profile wow fadeInUp")}
                    data-wow-delay="0.2s"
                >
                    <div className="advisor_thumb" key={props.candidate.id}>
                        <Image
                            // src={`${serverURL}${candidate.img}`}
                            width={240}
                            height={200}
                            src={props.candidate.image}
                            className={styles.image}
                            alt={props.candidate.first_name}
                        />

                        <div className="social-info">
                            <a href={props.candidate.facebook} target="_blank">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a href={`https://www.twitter.com/${props.candidate.twitter}`} target="_blank">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href={`https://www.instagram.com/${props.candidate.instagram}`} target="_blank">
                                <i className="fa fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    <div className="single_advisor_details_info">
                        <h6 >
                            {props.candidate.first_name + props.candidate.last_name}
                        </h6>
                        <p className="designation" > {props.candidate.title} </p>

                        <p className="designation" > {props.candidate.location}</p>

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