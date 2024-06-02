export interface ICountry {
    country: string
}

export interface IListOfCountries {
    country: ICountry[]
}

export interface ISelectedLocation {
    value: string,
    label: string
}

export interface ILocationState {
    locations: ICountry[];
    selectedLocation: ISelectedLocation
}

export interface ILocation {
    location: string | undefined,
    id: number | undefined
}

export interface ILocations {
    locations?: ILocation[] | [],
    placeholder: string,
    value?: string,
    message: string,
    onChange: (value: any) => void; // Update this line to accept an argument
}