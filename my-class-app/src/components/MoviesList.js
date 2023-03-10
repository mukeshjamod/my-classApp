
import React from 'react';
import Movie from './Movie';
import classes from './MoviesList.module.css';


const MoviesList = (props) => {
 
    return (
   <ul className={classes['movies-list']}>
    {props.movies.map((movie) => (
     <Movie 
        key={movie.id}
        title = {movie.title}
        releaseDate={movie.releaseDate}
        openingtext = {movie.opening_crawl}
        />
    ))}
   </ul>
   
    
  );
};

export default MoviesList;