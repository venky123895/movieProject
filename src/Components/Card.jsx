import React from 'react'
import {useSelector} from 'react-redux'
import './card.css'
import { Link } from 'react-router-dom'
const Card = () => {

    const selector=useSelector((state)=>{
        return state.popularReducer.popularMovies.results
    })
   

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

export default Card