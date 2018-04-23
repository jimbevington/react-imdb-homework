import React, { Component } from 'react';

class MovieListing extends Component {

  render(){
    return (
      <div className='movie-listing'>
        <h4 className='movie-title'>{this.props.title}</h4>
      </div>
    )
  }
}

export default MovieListing;
