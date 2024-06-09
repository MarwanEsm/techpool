import { useState } from "react"
import RegistrationForm from "@/components/forms/registration/RegistrationForm"
import Navbar from "@/components/overly/navbar/Navbar"
import Tab from "@/components/elements/tabs/Tab"
import Divider from "@/components/elements/divider/Divider"



const NAV_ITEMS = [
    { label: "Home", href: "/home" },
    { label: "Login", href: "/login" }
]

const TAB_ITEMS = [
    { label: "Register", index: 0 },
    { label: "Login", index: 1 }
]

const config = {
    lg: {
        size: 4, offset: 4
    },
    md: {
        size: 4, offset: 4
    },
    sm: {
        size: 6, offset: 3
    },

}
const Registration = () => {
    const [selectedTab, setSelectedTab] = useState<number>(0)

    return <>
        <Navbar nav_items={NAV_ITEMS} />
        <Tab items={TAB_ITEMS}
            selectedTab={selectedTab}
            onClick={(e, value) => setSelectedTab(value)}
        />
        <Divider config={config} />
        <RegistrationForm />
    </>
}

export default Registration