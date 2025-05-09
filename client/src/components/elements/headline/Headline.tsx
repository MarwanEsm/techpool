import React from "react";
import { IHeadlineProps } from "@/types/elements";
import ColoredDot from "../coloredDot/ColoredDot";



const Headline: React.FC<IHeadlineProps> = ({ size, children, character = '-', className, ...options }) => {
    return React.createElement(
        'h' + size,
        {
            className,
            ...options,
        },
        <ColoredDot character={character} size={size}>{children}</ColoredDot>
    );
};

export default Headline;

