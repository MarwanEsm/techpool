import React from "react"
import { IHeadlineProps } from "@/types/elements"
import ColoredDot from "../coloredDot/ColoredDot"



const Headline: React.FC<IHeadlineProps> = ({ size, children, character = '-', ...options }) =>
    React.createElement('h' + size, options,
        <ColoredDot character={character} size={size}>{children}</ColoredDot>)

export default Headline