import { useEffect } from "react"
import Headline from "../../components/elements/headline/Headline"
import Navbar from "../../components/overly/navbar/Navbar"
import AboutLogo from "../../assets/About page Logo.png"
import Developer from "../../assets/Web developer.png"
import Image from "next/image"
import styles from "./About.module.scss"
import { useIsDesktop } from "../../utils/utils"
import classNames from "classnames"

const NAV_ITEMS = [
    { label: "Register", href: "/registration" },
    { label: "Login", href: "/login" },
    { label: "Home", href: "/" }

]

const About = () => {

    const isDesktop = useIsDesktop()
    console.log(isDesktop);

    useEffect(() => {
        if (isDesktop) {
            console.log(isDesktop);

        }
    }, [isDesktop])

    return <>
        <Navbar nav_items={NAV_ITEMS} />
        <Headline size={4} character="!"> We shape the future of Web Development </Headline>
        <div>
            <h6 style={{ textAlign: "center" }}>We have started as Start up website to connect companies and talents in the web development field </h6>
            <div className={classNames(styles.images, !isDesktop && styles.mobile)}>
                <Image src={AboutLogo} width={200} height={200} alt="Web Development About" loading={"lazy"} />
                <Image src={Developer} width={200} height={200} alt="Web Developer" loading={"lazy"} />
            </div>

        </div>
    </>

}


export default About 