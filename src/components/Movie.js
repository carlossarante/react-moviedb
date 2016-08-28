import React from 'react';
import ReviewList from './ReviewList';
import Review from './Review';

var Movie = React.createClass({
  render: function() {
    return (
      <div className="container">
        <MovieInfo {...this.props.movie} />
        <ReviewList reviews={this.props.reviews} />
      </div>
    );
  }
});

var MovieInfo = React.createClass({
  render: function() {
    return (
      <div className="grid">
        <div className="col-3-10">
          <h2>{this.props.title}</h2>
          <img src={`http://image.tmdb.org/t/p/w185/${this.props.poster_path}`} alt={this.props.name}/>
        </div>
        <div className="movie-description col-3-10">
          <h2>About the movie</h2>
          <p>
            {this.props.overview}
          </p>
        </div>
      </div>
    );
  }
});

export default Movie;
