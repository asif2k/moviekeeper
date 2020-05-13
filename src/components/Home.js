import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MovieList from './MovieList'
import { api_key, base_uri } from '../Common'

const Home = () => {
  const location = useLocation()
  const [loading, setLoading] = useState(false);
  const [moviesList, setMoviesList] = useState([]); // movie list state

  let page_number = 1;
  let search_text;
  let total_pages = 1;

  // function to fetch movies in pages from api 
  const fetchMovies = async (text) => {
    text = text || search_text;
    if (page_number > total_pages) return;
    search_text = text;
    setLoading(true);
    console.log("search_text", search_text)
    const url = search_text ?
      `${base_uri}search/movie?api_key=${api_key}&query=${text}&page=${page_number}` :
      `${base_uri}movie/upcoming?api_key=${api_key}&page=${page_number}`;
    const res = await fetch(url);
    res.json().then(data => {
      total_pages = data.total_pages;
      page_number = data.page + 1;
      setMoviesList((prevList) => [...prevList, ...data.results]);
      setLoading(false);
    })
  };

  //initialize home page whenever reloaded
  useEffect(() => {
    page_number = 1;
    total_pages = 1;
    setMoviesList([]);
    if (location.hash) {
      fetchMovies(location.hash.replace('#', ''));
    }
    else {
      fetchMovies();
    }
  }, []);

  return (<MovieList fetchMore={fetchMovies} list={moviesList} loading={loading} />)


};

export default Home