import React from 'react';
import MediaList from '../components/MediaList';
import NavSearch from '../components/NavSearch';
import { constructMovieSearchByTitle, constructPopularMovies } from '../utils/MovieUtils'

var MoviesContainer = React.createClass({
  componentDidMount: function() {
    fetch(constructPopularMovies())
    .then(response => response.json())
    .then((movies) => this.setState({movies: movies.results}));
  },

  getInitialState: function() {
    return {
      movies: []
    };
  },

  searchMovie: function(movieToSearch) {
    if(movieToSearch.trim().length > 0) {
      fetch(constructMovieSearchByTitle(movieToSearch),{'Access-Control-Allow-Origin': 'true'})
      .then(response => response.json())
      .then((movies) => this.setState({movies: movies.results}));
    }
  },

  render: function() {
    var movies = this.state.movies;
    return (
      <div className="full-container">
        <NavSearch handleOnChange={this.searchMovie} />
        <MediaList medias={movies} type="movie" />
      </div>
    );
  }
});

export default MoviesContainer;
