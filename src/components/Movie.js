import React from 'react';

var Movie = React.createClass({
  render: function() {
    return (
      <div className="container">
        <MovieInfo {...this.props.movie} />
        <Reviews reviews={this.props.reviews} />
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

var Reviews = React.createClass({
  render: function() {
    var reviews = this.props.reviews.map(function(review){
      return (
        <Review key={review.id} {...review} />
      );
    });
    return (
      <div className="grid">
        <div className="customer-reviews col-offset-3-10">
          <h2>Customer Reviews</h2>
          {reviews}
        </div>
      </div>
    );
  }
});

var Review = React.createClass({
  render: function() {
    return (
      <div>
        <div className="customer-review">
          <h5>{this.props.author}</h5>
          <p>{this.props.content}</p>
        </div>
      </div>
    );
  }
});

export default Movie;
