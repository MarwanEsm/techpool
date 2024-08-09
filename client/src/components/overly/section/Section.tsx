import Headline from "@/components/elements/headline/Headline"
import { ISection } from "@/types/section"
import { useIsDesktop } from "@/utils/utils"
import classNames from "classnames"
import styles from "./Section.module.scss"

const Section = (props: ISection) => {

    const isDesktop = useIsDesktop();

    return <section className={styles.container}>
        {props.headline && <Headline size={3} character="-" style={props.headlineStyle}>{props.headline}</Headline>}
        {props.content && <p style={props.style}>{props.content}</p>}
        {props.images &&
            <div className={classNames(styles.images, !isDesktop && styles.mobile)}>
                {props.images}
            </div>
        }
        {props.children && props.children}

    </section>
}


export default Section
