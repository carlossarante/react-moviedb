import React from 'react';
import "./Movie.css";


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

var MovieList=  React.createClass({
  render: function() {
    var movies = [];
    this.props.movies.forEach(function(movie){
      movies.push(<Movie key={movie.id} {...movie} />);
    });
    return (
      <div className="movie__list">
        {movies}
       </div>
    );
  }
});

var Movie = React.createClass({
  render: function() {
    return (
      <div className="movie">
        <img src={"http://image.tmdb.org/t/p/w185/" + this.props.poster_path} alt={this.props.name}/>
        <h3>{this.props.title}</h3>
      </div>
    );
  }
});

var NavSearch = React.createClass({
  render: function() {
    return (
        <input placeholder="Search movie..."
              type="text"
              ref="textSearch"
            onChange={() => this.props.handleOnChange(this.refs.textSearch.value)}
            className="searchBar"/>
    );
  }
});

export default MoviesContainer;
