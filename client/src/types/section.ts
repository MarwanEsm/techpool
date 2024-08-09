export interface ISection {
    children?: React.ReactNode | React.ReactNode[],
    images?: JSX.Element,
    content?: string,
    headline?: string | boolean,
    color?: string
}