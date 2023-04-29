export const popularMovies=(movies)=>{
    return{
        type:"POPULARMOVIES",
        data:movies,
    }
}
export const movieTypes=(movies)=>{
    return{
        type:"MOVIETYPES",
        data:movies,
    }
}
export const movieOverView=(movies)=>{
    return{
        type:"MOVIEOVERVIEW",
        data:movies,
    }
}