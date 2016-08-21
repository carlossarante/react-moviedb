import React from 'react';
import "./Movie.css";

var MoviesContainer = React.createClass({

  getInitialState: function() {
    return {
      movies: [
        {
          id: 1,
          name: "Movie 1",
          img: "http://trailers.apple.com/trailers/magnolia/loandbeholdreveriesoftheconnectedworld/images/poster.jpg"
        },
        {
          id: 2,
          name: "Movie 2",
          img: "http://trailers.apple.com/trailers/magnolia/loandbeholdreveriesoftheconnectedworld/images/poster.jpg"
        },
        {
          id: 3,
          name: "Movie 3",
          img: "http://trailers.apple.com/trailers/magnolia/loandbeholdreveriesoftheconnectedworld/images/poster.jpg"
        }
      ]
    }
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
      <img src={props.img} alt={props.name}/>
      <h3>{props.name}</h3>
    </div>
  );
};

export default MoviesContainer;
