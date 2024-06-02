import React from "react";
import Select from "react-select"
import { ILocations } from "@/types/candidates";
import { StylesConfig } from "react-select";
import { useSelector } from "react-redux";
import { IRootState } from "@/types/redux";


const LocationSelector = (props: ILocations) => {
    const countries = useSelector((state: IRootState) => state.locations.locations);

    const customStyles: StylesConfig = {
        control: (provided: any, state: any) => ({
            ...provided,
            border: "none",
            borderRadius: "8px",
            boxShadow: state.isFocused ? "0 0 0 2px rgba(66, 153, 225, 0.5)" : "0 0 0 2px rgb(230, 230, 230)",
            "&:hover": {
                borderColor: state.isFocused ? "none" : "gray",
            },
        }),
        option: (provided: any, state: any) => ({
            ...provided,
            backgroundColor: state.isSelected ? "lightblue" : "white",
            "&:hover": {
                backgroundColor: "lightgray",
            },
        }),
    };

    const noOptionsMessage = () => <div>{props?.message}</div>;


    return (
        <Select
            noOptionsMessage={noOptionsMessage}
            options={countries}
            placeholder={props.placeholder}
            styles={customStyles}
        />
    );
};

export default LocationSelector;
