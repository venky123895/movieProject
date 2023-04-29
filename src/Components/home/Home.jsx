import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { popularMovies } from '../../redux/action'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Link} from 'react-router-dom'
import './home.css'
import Card from '../Card';
const Home = () => {

  const dispatch=useDispatch()
  const selector=useSelector((state)=>{
    return state.popularReducer.popularMovies.results
  
  })

  useEffect(() => {
    getDetails()
    }, [])


    async function getDetails(){
      const streamFunction=await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=960ed8422736e81f157d5b0d4b153efc&page=1`)
      const textResponse=await streamFunction.text()
      const jsonData=JSON.parse(textResponse)
      dispatch(popularMovies(jsonData))
    }
    
  




console.log("selecor",selector)
  return (
    <div>
      {
          (typeof(selector)==='undefined') ? (<div style={{textAlign:"center"}}><img src='https://media2.giphy.com/media/zlcIBNopQj8Yx5QgpR/giphy.gif' alt='loading'/></div>) : (
            <div className="poster">
            <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}
            >
                {
                  selector.map((movie)=>{
                    return(
                      <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`}>
                    <div className='posterImage'>
                       <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt='poster' className='posterxxx'/>
                     </div>
                     <div className='poster_Overlay'>
                      <div className='posterImage_title'>{movie ? movie.original_title : ""}</div>
                      <div className='posterImage_runtime'>
                        {
                          movie ? movie.release_date : ""
                        }
                        <span className='posterImage_rating'>
                          {
                            movie ? movie.vote_average : ""
                          }
                          <i className='fas fa-star' /> {" "}
                        </span>
                      </div>
                      <div className='posterImage_description'>{movie ? movie.overview : ""}</div>
                     </div>
                      </Link>
                    )
                  })
                }
  
            </Carousel>
          </div>
          )
        
      }

      <Card/>
    </div>
  )
}

export default Home