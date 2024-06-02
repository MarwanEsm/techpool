"use client"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Row, Col } from "reactstrap"
import { setLocations } from "@/redux/reducers/locationSlice"
import Navbar from "@/components/overly/navbar/Navbar"
import LocationSelector from "@/components/elements/input/locationSelector/LocationSelector"
import Headline from "@/components/elements/headline/Headline"
import axios from "axios"


const NAV_ITEMS = [
    { label: "Register", href: "/registration" },
    { label: "Login", href: "/login" }
]

const Home = () => {

    const dispatch = useDispatch()

    const getOptions = async () => {
        try {
            const response = await axios.get('https://countriesnow.space/api/v0.1/countries');
            dispatch(setLocations(response.data.data.map(
                (country: any) => ({ value: country.country, label: country.country }))
            ))

        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Axios error:', error.message);
            } else {
                console.error('Unexpected error:', error);
            }
        }
    };

    useEffect(() => {
        getOptions()
    }, [])


    return <>
        <Navbar nav_items={NAV_ITEMS} />
        <Headline size={4} character=".">Let us help you find a candidate</Headline>

        <Row className="justify-content-center">
            <Col lg={4} md={6} sm={8} xs={8}>
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
