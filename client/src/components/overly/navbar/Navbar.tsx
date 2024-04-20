import React from "react";
import styles from "./Navbar.module.scss";
import photo from '../../../assets/logo.png'
import Logo from "@/components/elements/logo/Logo";
import { INavbar, INavItem } from "@/types/navbar";
import Link from "next/link";






const Navbar = (props: INavbar) => {


    return <div className={styles.navbar_container}>

        <div>
            <Logo width={50} height={50} src={photo} alt="candidate" />
        </div>

        <div >
            {props.nav_items?.map((item: INavItem, index: number) => (
                <React.Fragment key={index}>
                    <Link href={item.href}>{item.label}</Link>
                    {index !== props.nav_items.length - 1 && <span> | </span>}
                </React.Fragment>
            ))}
        </div>
    </div>


}


export default Navbar;