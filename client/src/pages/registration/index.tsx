import RegistrationForm from "@/components/forms/registration/RegistrationForm"
import Navbar from "@/components/overly/navbar/Navbar"


const NAV_ITEMS = [
    { label: "Home", href: "/home" },
    { label: "Login", href: "/login" }
]
const Registration = () => {
    return <>
        <Navbar nav_items={NAV_ITEMS} />
        <RegistrationForm />
    </>
}

export default Registration