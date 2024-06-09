import { Row, Col } from "reactstrap"
import styles from "./Divider.module.scss"
interface IConfig {
    lg: {
        size: number,
        offset: number
    },
    md: {
        size: number,
        offset: number
    }
    ,
    sm: {
        size: number,
        offset: number
    }
}

interface IDividerProps {
    config: IConfig
}

const Divider = (props: IDividerProps) => <Row>
    <Col {...props.config}>
        <div className={styles.divider}></div>
    </Col>
</Row>


export default Divider