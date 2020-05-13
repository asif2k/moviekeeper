import React, { useContext } from 'react';
import  AppContext  from '../AppContext'
import MovieList from './MovieList'
const Favorites = ({ list, loading, fetchMore }) => {
  const context = useContext(AppContext);  
  console.log("context.favorites_list",context.favorites_list);
  return (<MovieList  list={Object.entries(context.favorites_list).map((o)=>o[1])} />)
};

export default Favorites