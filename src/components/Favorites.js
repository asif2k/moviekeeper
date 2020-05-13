import React, { useContext } from 'react';
import { AppContext } from '../App'
import MovieList from './MovieList'
const Favorites = ({ list, loading, fetchMore }) => {
  const context = useContext(AppContext);  
  return (<MovieList  list={Object.entries(context.favourite_list).map((o)=>o[1])} />)
};

export default Favorites