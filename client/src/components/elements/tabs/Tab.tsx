import styles from "./Tab.module.scss";

interface ITabItem {
    label: string;
    index: number;
}

interface ITabItemsProps {
    items: ITabItem[];
    selectedTab: number;
    onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, index: number) => void;
}

const Tab = (props: ITabItemsProps) => {
    return (
        <ul className={styles.tab}>
            {props.items.map((item, index) => (
                <li key={index}>
                    <a className={props.selectedTab === index ? 'active' : ''}
                        onClick={(e) => props.onClick(e, index)}>
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default Tab;
