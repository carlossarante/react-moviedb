import React from 'react';
import Movie from './Movie';

export default React.createClass({
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
