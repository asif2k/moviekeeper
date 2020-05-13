import React, { useEffect, useContext, useState } from 'react';
import AppContext  from '../AppContext'
import { getMoviePoster, fetchMovieDetails, fetchMovieVideos, getVideoSiteUrl } from '../Common'

const MovieDetails = ({ movieId, onClose,movieItem }) => {

  const context = useContext(AppContext);
  //states for movie details and videos
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieVideos, setMovieVideos] = useState(null);

  // load movie details and videos when component mounted
  useEffect(() => {
    if(!movieId && movieItem){
      movieId=movieItem.id;
      setMovieDetails(movieItem);
      return;
    }
    fetchMovieDetails(movieId).then(res => res.json().then((data) => {
      setMovieDetails(data);
      fetchMovieVideos(movieId).then(res => res.json().then((data) => {        
        setMovieVideos(data.results);
      }))
    }))
  }, [])


  return (
    <div className="movie-details">
      <span className="x-squar-fill-icon" onClick={onClose} ></span>
      {movieDetails ? <div className="row">
        <div className="col-sm-6"><p style={{ textAlign: "center" }}><img src={getMoviePoster(movieDetails)} width="250" /></p> </div>
        <div className="col-sm-6">
          <div className="card" style={{ border: "none", background: "none" }}>
            <div className="card-body">
              <h5 className="card-title">{movieDetails.title}({new Date(movieDetails.release_date).getFullYear()})</h5>
              <h6 className="card-subtitle mb-2 text-muted">{movieDetails.release_date}&nbsp;<br />
                {movieDetails.genres ? movieDetails.genres.map((g, i) => {
                  return <span key={i}>&nbsp;|&nbsp;<a href="#">{g.name}</a></span>
                }) : ''}
              </h6>
              <p className="card-text" style={{ textAlign: "justify" }}>{movieDetails.overview}</p>
              <a href="#" className="btn btn-sm btn-primary" onClick={(e) => {
                if (context.watch_list_set(movieDetails)) {
                  e.target.innerHTML = 'Remove from watch list'
                }
                else {
                  e.target.innerHTML = 'Add to watch list'
                }
              }} >{context.watch_list[movieDetails.id] ? 'Remove from watch list' : 'Add to watch list'}</a>
            &nbsp;

            <a href="#" className="btn  btn-sm btn-info" onClick={(e) => {
                if (context.favorites_list_set(movieDetails)) {
                  e.target.innerHTML = 'Remove from faviorate'
                }
                else {
                  e.target.innerHTML = 'Add to favorites'
                }
              }}>{context.favorites_list[movieDetails.id] ? 'Remove from favorites' : 'Add to faviorates'}</a>
              <h5><br /> Trailers</h5>
              {movieVideos ? movieVideos.map((g, i) => {
                return (<span key={i}>&nbsp;<a target="_blank" href={getVideoSiteUrl(g)}>{g.site}</a><br /></span>)
              }) : ''}
            </div>
          </div>
        </div>
      </div> : <div className="spinner-border">
          <span className="sr-only"></span>
        </div>}

    </div>
  )

};

export default MovieDetails