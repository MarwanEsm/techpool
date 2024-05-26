import React, { useEffect } from "react";
import AsyncSelect from "react-select/async";
import { ILocations } from "@/types/candidates";
import { StylesConfig } from "react-select";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLocations } from "@/redux/reducers/locationSlice";
import { IRootState } from "@/types/redux";

interface ICountryName {
    common: string;
}

export interface ICountry {
    name: ICountryName;
}

const LocationSelector = (props: ILocations) => {
    const countries = useSelector((state: IRootState) => state.locations);
    const dispatch = useDispatch();

    useEffect(() => {
        const getOptions = async () => {
            const response = await axios.get("https://restcountries.com/v3.1/all");
            const result = response.data;
            dispatch(setLocations(result));
        };
        getOptions();
    }, [dispatch]);

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

    // const loadOptions = async (inputValue: string) => {
    //     return countries
    //         .find((country) =>
    //             country.name.common.toLowerCase().includes(inputValue.toLowerCase())
    //         )
    //         .map((country, index) => ({
    //             value: index,
    //             label: country.name.common,
    //         }));
    // };

    return (
        <AsyncSelect
            noOptionsMessage={noOptionsMessage}
            // loadOptions={loadOptions}
            placeholder={props.placeholder}
            styles={customStyles}
        />
    );
};

export default LocationSelector;
