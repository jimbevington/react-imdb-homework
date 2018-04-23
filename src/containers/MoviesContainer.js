import React, { Component } from 'react';
import MoviesList from '../components/MoviesList.js';

class MoviesContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          title: "Raw", year: 2017, director: 'Julia Ducournau'
        },
        {
          title: 'Annihilation', year: 2017, director: 'Alex Garland'
        },
        {
          title: 'Attack The Block', year: 2011, director: 'Joe Cornish'
        }
      ]
    };
  }

  render(){
    return (
      <MoviesList className='movies-list' data={this.state.data}/>
    )
  }
}

export default MoviesContainer;
