export const api_key = "fec8b5ab27b292a68294261bb21b04a5"
export const base_uri = "http://api.themoviedb.org/3/"
export const images_uri = "https://image.tmdb.org/t/p/w300"

// common and global functionality 

export const getMoviePoster= (item)=>{
    if (item.poster_path === null) {
      return "no-poster.jpg"
    }
    else {
       return images_uri + item.poster_path;
    }
}

export const getVideoSiteUrl= (g)=>{
   if(g.site === "YouTube" ) return `https://www.youtube.com/watch?v=${g.key}`;
   if(g.site === "Vimeo" ) return `https://vimeo.com/${g.key}`;
   else return '#';

}

export const fetchMovieDetails=(id)=>{
    return fetch(`${base_uri}movie/${id}?api_key=${api_key}`);
}

export const fetchMovieVideos=(id)=>{
    return fetch(`${base_uri}movie/${id}/videos?api_key=${api_key}`);
}