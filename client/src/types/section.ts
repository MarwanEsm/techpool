export interface ISection {
    children?: React.ReactNode | React.ReactNode[],
    images?: JSX.Element,
    content?: string,
    headline?: string | boolean,
    style?: any,
    className?: string
}