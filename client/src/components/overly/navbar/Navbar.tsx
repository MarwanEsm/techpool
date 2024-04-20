import React, { ChangeEvent, useState } from "react";
// import { useHistory } from "react-router-dom";
// import Logo from "./Logo";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
// import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
// import _ from "lodash";
import styles from "./Navbar.module.scss";
import { Row, Col, Nav, NavItem, NavLink } from "react-bootstrap";
import photo from '../../../assets/logo.png'
import Logo from "@/components/elements/logo/Logo";
import Icon from "@/components/elements/icon/Icon";
import Select from "react-select"
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