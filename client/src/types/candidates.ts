export interface ILocation {
    location: string | undefined,
    id: number | undefined
}

export interface ILocations {
    locations?: ILocation[] | [],
    placeholder: string,
    value?: string,
    message: string,
    onChange: () => void
}


export interface ICandidate {
    first_name: string,
    last_name: string,
    occupation: string,
    location: ILocation
}

