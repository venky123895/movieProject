const intialData={
    popularMovies:[]
}

export const popularReducer=(state=intialData,{type,data})=>{
    switch (type) {
        case "POPULARMOVIES":
            
            return {...state,popularMovies:data}
    
        default:
           return state
    }
}

const movieTypes={
    popularMovies:[]
}

export const movieTypesReducer=(state=movieTypes,{type,data})=>{
    switch (type) {
        case "MOVIETYPES":
            
            return {...state,popularMovies:data}
    
        default:
           return state
    }
}

const movieOverview={
    movieDetails:[]
}
export const movieOverViewReducer=(state=movieOverview,{type,data})=>{
    switch (type) {
        case "MOVIEOVERVIEW":
            
            return {...state,movieDetails:data}
    
        default:
           return state
    }
}
