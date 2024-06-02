import { IListOfCountries } from "./location";

export interface IRootState {
    locations: {
        locations: IListOfCountries[];
    };
    candidates: {
        searched_title: string
    }
}