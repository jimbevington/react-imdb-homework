import React from 'react';
import GetMovieShowtimes from './GetMovieShowtimes.js';

const MovieListing = (props) =>
  <div className='movie-listing'>
    <h4 className='movie-title'>{props.title}</h4>
    <GetMovieShowtimes times={props.showtimes}/>
  </div>

export default MovieListing;
