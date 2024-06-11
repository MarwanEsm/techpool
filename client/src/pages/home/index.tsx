"use client"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Row, Col } from "reactstrap"
import { setLocations, setSelectedLocation } from "@/redux/reducers/locationSlice"
import Navbar from "@/components/overly/navbar/Navbar"
import LocationSelector from "@/components/elements/input/locationSelector/LocationSelector"
import Headline from "@/components/elements/headline/Headline"
import axios from "axios"
import CandidateCard from "@/components/elements/candidateCard/CandidateCard"
import Footer from "@/components/overly/footer/Footer"


const NAV_ITEMS = [
    { label: "Register", href: "/registration" },
    { label: "Login", href: "/login" }
]

const DUMMY_CANDIDATE = {
    first_name: "Marwa",
    last_name: "Esmaail",
    location: "Dubai",
    title: "Software Developer",
    id: 3,
    image: "/",
    facebook: "www.facebook.com",
    twitter: "www.twitter.com",
    instagram: "www.instagram.com"
}

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
                    message="We could not find a location"
                    onChange={(value: any) => dispatch(setSelectedLocation(value))}
                />
            </Col>
        </Row>
        <CandidateCard candidate={DUMMY_CANDIDATE} />
        <Footer />
    </>

}

export default Home
