import { Nav, NavItem, NavLink } from "reactstrap"
import styles from "./Tab.module.scss"

interface ITabItem {
    label: string,
    index: number,
}

interface ITabItemsProps {
    items: ITabItem[],
    selectedTab: number,
    onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, index: number) => void
}


const Tab = (props: ITabItemsProps) => {

    return <Nav tabs className={styles.tab}  >
        {props.items.map((item, index) =>
            <NavItem key={index}>
                <NavLink active={props.selectedTab === index} onClick={(e) => props.onClick(e, index)}>
                    {item.label}
                </NavLink>
            </NavItem>
        )}
    </Nav>
}

export default Tab