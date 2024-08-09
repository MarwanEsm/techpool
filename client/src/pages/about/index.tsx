import { useEffect } from "react";
import Headline from "../../components/elements/headline/Headline";
import Navbar from "../../components/overly/navbar/Navbar";
import Image from "next/image";
import { useIsDesktop } from "../../utils/utils";
import Section from "@/components/overly/section/Section";
import AboutLogo from "../../assets/About page Logo.png";
import Developer from "../../assets/Web developer.png";

const NAV_ITEMS = [
    { label: "Register", href: "/registration" },
    { label: "Login", href: "/login" },
    { label: "Home", href: "/" }
];

const About = () => {
    const isDesktop = useIsDesktop();

    useEffect(() => {
        if (isDesktop) {
            console.log("Desktop view detected");
        }
    }, [isDesktop]);

    return (
        <>
            <Navbar nav_items={NAV_ITEMS} />
            <Headline size={4} character="." style={{ padding: "10px" }}>We Shape the Future of Web Development</Headline>

            <Section
                content="Connecting companies with top talent in the web development field.
                         From startups to established enterprises, we provide the platform that 
                         bridges the gap between opportunity and talent."
                style={{ marginTop: "30px" }}
                images={<>
                    <Image src={AboutLogo} width={100} height={100} alt="About Us Logo" loading="lazy" />
                    <Image src={Developer} width={100} height={100} alt="Web Developer" loading="lazy" />
                </>
                }
            />

            <Section
                headline={"Our Mission"}
                content="Empower the next generation of web developers by 
                         providing a platform that fosters learning, growth, and opportunity. 
                         We believe in the power of technology to transform lives, and we are 
                         committed to making the web a better place for everyone."
                style={{ color: "#555" }}
                headlineStyle={{ margin: "30px auto 20px auto" }}
            />

            <Section headline={"Our Values"} headlineStyle={{ margin: "30px auto 20px auto" }}>
                <ul>
                    <li>Innovation: We are always looking for new ways to solve problems and create value.</li>
                    <li>Integrity: We do the right thing, even when no one is watching.</li>
                    <li>Collaboration: We believe that great things are achieved by working together.</li>
                    <li>Excellence: We strive for excellence in everything we do.</li>
                </ul>
            </Section>

        </>
    );
};

export default About;
