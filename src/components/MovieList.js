import React, { useEffect, useRef, useContext,useState } from 'react';
import { getMoviePoster } from '../Common'
import  AppContext  from '../AppContext'
import MovieDetails from './MovieDetails'

const MovieList = ({ list, loading, fetchMore }) => {

  const context = useContext(AppContext);
  const [movieId, setMovieId] = useState(null);
 
  // references to DOM elements 
  const list_area = useRef()
  const movie_list = useRef()
  let lastFetchTime;

  // handle infinite scroll and load next pages
  const infiniteScroll = () => {
    if (list_area.current.scrollTop + window.innerHeight > movie_list.current.clientHeight) {
      
      // control multiple trigger during scroll
      if (loading | Date.now() - lastFetchTime < 1000) return;
      lastFetchTime = Date.now();
      if (fetchMore) fetchMore();
    }
  };

  // execute when component mounted
  useEffect(() => {
    lastFetchTime = 0;
    list_area.current.addEventListener('scroll', infiniteScroll)
    // executes when component unmounted
    return () => {
      list_area.current.removeEventListener('scroll', infiniteScroll)
    };
  }, [])
  
  return (
    <> 
      <div className="movie-list-area" ref={list_area}>
        <ul ref={movie_list} className='list-unstyled'>        
          {list && list.map((item, index) => (
            <li key={index} className="media col-sm-6">
              <img src={getMoviePoster(item)}  onClick={()=>setMovieId(item.id)} />
              <div className="media-body">
                <h6 className="media-title" onClick={()=>setMovieId(item.id)} > {item.title}</h6>
                <span role="fav-icon" className={context.favorites_list[item.id] ? 'fill-star-icon' : 'star-icon'}
                  onClick={(e) => {
                    e.target.classList.remove("star-icon")
                    e.target.classList.remove("fill-star-icon")
                    if (context.favorites_list_set(item)) {
                      e.target.classList.add("fill-star-icon")
                    }
                    else {
                      e.target.classList.add("star-icon")
                    }
                  }} ></span>
              </div>
            </li>
          ))}


          {loading && <li className='media col-sm-6'>Loading...</li>}
        </ul>
      </div>
      {movieId ? <MovieDetails movieId={movieId} onClose={()=>setMovieId(null)} /> : ''}
    </>)


};

export default MovieList