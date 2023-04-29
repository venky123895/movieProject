import React from 'react'
import {useSelector} from 'react-redux'
import './card.css'
import { Link } from 'react-router-dom'
import { movieTypes } from '../redux/action'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
const MovieDetails = () => {

    const selector=useSelector((state)=>{
        return state.movieTypesReducer.popularMovies.results
    })
    console.log(selector)
    const dispach=useDispatch()
    const {type} =useParams()
    console.log(type)
    async function getDetails(){
        const streamFunction=await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=960ed8422736e81f157d5b0d4b153efc&language=en-US&page=1`)
        const textResponse=await streamFunction.text()
        const jsonData=JSON.parse(textResponse)
       dispach(movieTypes(jsonData))
      }

   
    useEffect(() => {
    getDetails()
    }, [type])
    

  return (
    <div className='popular'>
        {
           (typeof(selector)==="undefined") ? (<div><img src='https://c4.wallpaperflare.com/wallpaper/992/198/565/computers-1920x1080-loading-wallpaper-preview.jpg' alt='loader' /></div>) : (
            selector.map((movie)=>{
                return(
                    <div className="card">
                        <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`}>
            <div className="imageContainer">
                <img src={`https://image.tmdb.org/t/p/original${movie && movie.poster_path}`} alt='poster' className='cardPoster'/>
            </div>
            <div className="cardOverLay">
                <h3 className='movieName'>{movie.original_title}</h3>
                <h4 className='realeaseData'>{movie.release_dat}</h4>
                <p className='rating'>{movie.vote_average}</p>
                <p className='description'>{movie.overview}</p>
            </div>
            </Link>
        </div>
                )
            })
           )
        }
        
    </div>
    
  )
}

export default MovieDetails