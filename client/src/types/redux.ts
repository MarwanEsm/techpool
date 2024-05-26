import { ICountry } from "../components/elements/input/locationSelector/LocationSelector"

export interface IRootState {
    locations: {
        locations: ICountry[];
    };
    candidates: {
        searched_title: string
    }
}