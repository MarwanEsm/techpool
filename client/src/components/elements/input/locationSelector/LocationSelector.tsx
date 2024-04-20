import Select, { StylesConfig } from "react-select";
import { ILocations } from "@/types/candidates"




const LocationSelector = (props: ILocations) => {

    const customStyles: StylesConfig = {
        control: (provided, state) => ({
            ...provided,
            border: "none",
            borderRadius: "8px",
            boxShadow: state.isFocused ? "0 0 0 2px rgba(66, 153, 225, 0.5)" : "0 0 0 2px rgb(230, 230, 230)",
            "&:hover": {
                borderColor: state.isFocused ? "none" : "gray",
            },
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? "lightblue" : "white",
            "&:hover": {
                backgroundColor: "lightgray",
            },
        }),
    };
    const noOptionsMessage = () => <div>{props?.message}</div>

    return <Select
        noOptionsMessage={noOptionsMessage}
        // options={props.locations}
        placeholder={props.placeholder}
        // value={props.value}
        styles={customStyles}
        id="react-select-1"

    />
}


export default LocationSelector