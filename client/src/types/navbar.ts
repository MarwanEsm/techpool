export interface INavItem {
    label: string,
    href: string,
    onClick?: () => void
}


export interface INavbar {
    nav_items: INavItem[]
}