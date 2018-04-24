import React from 'react';
import MovieListing from './MovieListing.js'

const MoviesList = (props) => {

  const movieListings = props.data.map(movie => {
    return (
      <MovieListing key={movie.id} title={movie.title}/>
    );
  });

  return <div className='movies-list'>{movieListings}</div>

};


export default MoviesList;
