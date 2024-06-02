

export interface ICountry {
    country: string
}

export interface IListOfCountries {
    country: ICountry[]
}
export interface IRootState {
    locations: {
        locations: IListOfCountries[];
    };
    candidates: {
        searched_title: string
    }
}