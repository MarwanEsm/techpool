"use client"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Row, Col } from "reactstrap"
import Navbar from "@/components/overly/navbar/Navbar"
import LocationSelector from "@/components/elements/input/locationSelector/LocationSelector"
import Headline from "@/components/elements/headline/Headline"
import axios from "axios"
import { setLocations } from "@/redux/reducers/locationSlice"





const NAV_ITEMS = [{ label: "Register", href: "/registration" }, { label: "Login", href: "/login" }]


const Home = () => {

    const dispatch = useDispatch()

    const getOptions = async () => {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const result = response.data;
        dispatch(setLocations(result))
    };


    useEffect(() => {
        getOptions()
    }, [])


    return <>
        <Navbar nav_items={NAV_ITEMS} />
        <Headline size={4} character=".">Let us help you find a candidate</Headline>

        <Row className="justify-content-center">
            <Col lg={4}>
                <LocationSelector
                    placeholder="Select location"
                    onChange={() => console.log("LOCATION")}
                    message="We could not find a location"
                />
            </Col>
        </Row>
    </>

}

export default Home
