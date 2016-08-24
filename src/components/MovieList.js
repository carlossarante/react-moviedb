import React from 'react';
import MovieItem from './MovieItem';

export default React.createClass({
  render: function() {
    var movies = [];
    this.props.movies.forEach(function(movie){
      movies.push(<MovieItem key={movie.id} {...movie} />);
    });
    return (
      <div className="movie__list">
        {movies}
       </div>
    );
  }
});
