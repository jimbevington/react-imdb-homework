import React, { Component } from 'react';
import MoviesList from '../components/MoviesList.js';
import GetShowtimes from '../components/GetShowtimes.js';

class MoviesContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          title: "Raw", year: 2017, director: 'Julia Ducournau', showtimes: [1200, 1545, 1800, 2130]
        },
        {
          title: 'Annihilation', year: 2017, director: 'Alex Garland', showtimes: [1350, 1600, 2200]
        },
        {
          title: 'Attack The Block', year: 2011, director: 'Joe Cornish', showtimes: [1145, 1400, 1930]
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
