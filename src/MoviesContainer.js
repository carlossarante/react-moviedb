import React from 'react';
import "./Movie.css";

var MoviesContainer = React.createClass({

  componentDidMount: function() {
    fetch("http://api.themoviedb.org/3/movie/popular?api_key=925a4602f6b05af1f8e2391a9a8e7c51")
      .then(function(response) {
        return response.json();
      })
      .then(function(movies){
        console.log(movies);
        this.setState({movies: movies.results});
      }.bind(this));
  },

  componentWillUnmount: function() {
    console.log("unmounted");
  },

  getInitialState: function() {
    return {
      movies: []
    };
  },
  render: function() {
    var movies = this.state.movies;
    return (
      <div>
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

var Movie = function(props) {
  return (
    <div className="movie">
      <img src={"http://image.tmdb.org/t/p/w185/" + props.poster_path} alt={props.name}/>
      <h3>{props.title}</h3>
    </div>
  );
};

export default MoviesContainer;
