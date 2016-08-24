import React from 'react';
import MovieList from '../components/MovieList';
import NavSearch from '../components/NavSearch';

function constructMovieSearchByTitle(movieTitle) {
  return `//api.themoviedb.org/3/search/movie?api_key=925a4602f6b05af1f8e2391a9a8e7c51&query=${movieTitle}`;
}

function constructPopularMovies() {
  return `//api.themoviedb.org/3/movie/popular?api_key=925a4602f6b05af1f8e2391a9a8e7c51`;
}

var MoviesContainer = React.createClass({
  componentDidMount: function() {
    fetch(constructPopularMovies())
    .then(response => response.json())
    .then(function(movies){
      this.setState({movies: movies.results});
    }.bind(this));
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
      .then(function(movies){
        this.setState({movies: movies.results})
      }.bind(this));
    }
  },
  render: function() {
    var movies = this.state.movies;
    return (
      <div className="container">
        <NavSearch handleOnChange={this.searchMovie} />
        <MovieList movies={movies} />
      </div>
    );
  }
});

export default MoviesContainer;
