import { IColoredDotProps } from "@/types/elements"
import styles from "./ColoredDot.module.scss"

const ColoredDot = (props: IColoredDotProps) => {

    return <>
        {Array.isArray(props.children) ? props.children[0] : props.children}
        <span
            className={styles.green}
        >
            {props.character}
        </span>
        {Array.isArray(props.children) &&
            props.children.length >= 1 &&
            props.children.slice(1)}
    </>
}

export default ColoredDot