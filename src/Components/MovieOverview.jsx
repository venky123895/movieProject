import React from 'react'
import './movieoverview.css'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { movieOverView } from '../redux/action'
const MovieOverview = () => {
    const{id}=useParams();
    const dispatch=useDispatch()
    const selector=useSelector((state)=>{
        return state.movieOverViewReducer.movieDetails
    })
    console.log("movieDetails",selector);
    async function getDetails(){
        const streamFunction=await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=960ed8422736e81f157d5b0d4b153efc&language=en-US&page=1`)
        const textResponse=await streamFunction.text()
        const jsonData=JSON.parse(textResponse)
       dispatch(movieOverView(jsonData))
      }

   
    useEffect(() => {
    getDetails()
    }, [id])
   
    
  return (
    <div className='movieOverview'>
        <div className="moviePoster">
            <img src={`https://image.tmdb.org/t/p/original${selector.poster_path}`} alt='poter' className='moviePosterX'/>   
        </div>
        <div className="movieDetailsOverlay">
            <div className="leftContainer">
                <img src={`https://image.tmdb.org/t/p/original${selector.backdrop_path}`} alt='mini' className='miniPoster'/>
            </div>
            <div className="rightCotainer">
                <div className="topContainer">
                <h2 className='movieTitle'>{selector.original_title}</h2>
                <p className='movieSub'>{selector.tagline}</p>
                <p className='rating'>Rating:{selector.vote_average}</p>
                <p className='duration'><span>{selector.runtime}</span> min</p>
                <p className='realeaseDate'>Release date:{selector.release_date}</p>
                </div>
                <div className="bottomContainer">
                    <p className='movieOverView'>{selector.overview}</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default MovieOverview