import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, library, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
// Initialize icons
const initIcons = () => {
    library.add(faUser, faFacebook, faTwitter, faInstagram);
};

// Prefix mapping
const PREFIX: Record<string, IconPrefix> = {
    light: 'fal',
    solid: 'fas',
    regular: 'far',
    duotone: 'fad',
    brands: 'fab'
};

// Props interface
interface IIconProps {
    icon: IconName,
    type?: "light" | "solid",
    [key: string]: any
}

// Icon component
const Icon = ({ icon, type = "solid", ...options }: IIconProps) => (
    <i {...options}>
        <FontAwesomeIcon icon={[PREFIX[type], icon]} />
    </i>
);

export default Icon;
export { initIcons };
