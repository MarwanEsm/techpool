import { useState } from "react"
import RegistrationForm from "@/components/forms/registration/RegistrationForm"
import Navbar from "@/components/overly/navbar/Navbar"
import Tab from "@/components/elements/tabs/Tab"
import Divider from "@/components/elements/divider/Divider"
import LoginForm from "@/components/forms/login/Login"
import Footer from "@/components/overly/footer/Footer"



const NAV_ITEMS = [
    { label: "Home", href: "/home" },
    { label: "About", href: "/about" }
]

const TAB_ITEMS = [
    { label: "Register", index: 0 },
    { label: "Login", index: 1 }
]

const config = {
    lg: {
        size: 2, offset: 5
    },
    md: {
        size: 4, offset: 4
    },
    sm: {
        size: 6, offset: 3
    },
    xm: {
        size: 6, offset: 3
    }

}
const Login = () => {
    const [selectedTab, setSelectedTab] = useState<number>(1)

    return <>
        <Navbar nav_items={NAV_ITEMS} />
        <Tab items={TAB_ITEMS}
            selectedTab={selectedTab}
            onClick={(e, value) => setSelectedTab(value)
            }
        />
        <Divider config={config} />
        {selectedTab === 0 ? <RegistrationForm /> : <LoginForm />}
        <Footer />
    </>
}

export default Login