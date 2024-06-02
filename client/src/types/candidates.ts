export interface ICandidate {
    first_name: string,
    last_name: string,
    location: string,
    title: string,
    id: number,
    image: string,
    facebook: string,
    twitter: string,
    instagram: string
}

export interface ICandidateProps {
    candidate: ICandidate
}

