import React, { Component } from 'react';

// has access to all Movies details via this.props.data

class GetShowtimes extends Component {
  render(){
    return <button className='get-showtimes'>Get Showtimes</button>
  }
}

export default GetShowtimes;
