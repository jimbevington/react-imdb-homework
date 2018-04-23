import React, { Component } from 'react';
import MovieListing from './MovieListing.js'

class MoviesList extends Component {

  render(){
    const movieListings = this.props.data.map(movie => {
      return (
        <MovieListing title={movie.title}/>
      );
    });
    return <div className="movies-list">{movieListings}</div>
  }

}


export default MoviesList;
