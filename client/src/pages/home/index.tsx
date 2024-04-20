"use client"
// import { useDispatch } from "react-redux"
// import { setSearchedTitle } from "@/redux/reducers/candidatesSlice"
import { Row, Col } from "reactstrap"
import Navbar from "@/components/overly/navbar/Navbar"
// import LocationSelector from "@/components/elements/input/locationSelector/LocationSelector"
import Headline from "@/components/elements/headline/Headline"
// import { Provider } from "react-redux"
// import '@/styles/pageStyle/Home.css'
import styles from "./Home.module.scss"




const NAV_ITEMS = [{ label: "Register", href: "/registration" }, { label: "Login", href: "/login" }]


const Home = () => {

    // const dispatch = useDispatch()
    return <>
        <Navbar nav_items={NAV_ITEMS} />
        <Headline size={4} character=".">Let us help you find a candidate</Headline>

        <Row className="justify-content-center">
            <Col lg={4}>
                {/* <LocationSelector
                    locations={[]}
                    placeholder="Select location"
                    onChange={() => console.log("LOCATION")}
                    message="We could not find a location"
                /> */}
            </Col>
        </Row>
    </>

}

export default Home
