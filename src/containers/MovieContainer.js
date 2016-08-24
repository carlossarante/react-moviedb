import React from 'react';
import Movie from '../components/Movie';

function constructFindMovie(id) {
  return `//api.themoviedb.org/3/movie/${id}?api_key=925a4602f6b05af1f8e2391a9a8e7c51`;
}

var MovieContainer = React.createClass({
  componentDidMount: function() {
    fetch(constructFindMovie(this.props.params.id))
    .then(response => response.json())
    .then(function(movie){
      this.setState({movie: movie})
    }.bind(this))
  },

  getInitialState: function() {
    return {
      movie: {}
    }
  },
  render: function() {
    return (
      <Movie {...this.state.movie}/>
    )
  }
});

export default MovieContainer;
