export interface Review{
    user:string,
    rating:number,
    comment:string
}

export interface Destination{
    id:string,
    title : string,
    description: string,
    reviews: Review[];
}