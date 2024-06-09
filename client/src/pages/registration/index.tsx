import { useState } from "react"
import RegistrationForm from "@/components/forms/registration/RegistrationForm"
import Navbar from "@/components/overly/navbar/Navbar"
import Tab from "@/components/elements/tabs/Tab"



const NAV_ITEMS = [
    { label: "Home", href: "/home" },
    { label: "Login", href: "/login" }
]

const TAB_ITEMS = [
    { label: "Register", index: 0 },
    { label: "Login", index: 1 }
]
const Registration = () => {
    const [selectedTab, setSelectedTab] = useState<number>(0)

    return <>
        <Navbar nav_items={NAV_ITEMS} />
        <Tab items={TAB_ITEMS}
            selectedTab={selectedTab}
            onClick={(e, value) => setSelectedTab(value)}
        />
        <RegistrationForm />
    </>
}

export default Registration