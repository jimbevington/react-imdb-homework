import React, { Component } from 'react';
import MoviesList from '../components/MoviesList.js';
import GetShowtimes from '../components/GetShowtimes.js';

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
      <div classname='movies-container'>
        <h1>UK Opening This Week:</h1>
        <MoviesList data={this.state.data}/>
        <GetShowtimes data={this.state.data}/>
      </div>
    )
  }
}

export default MoviesContainer;
