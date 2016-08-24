import React from 'react';

var Movie = React.createClass({
  
  render: function() {
    console.log(this.props);
    return (
      <div className="container">
        <h2>{this.props.title}</h2>
        <img src={`http://image.tmdb.org/t/p/w185/${this.props.poster_path}`} alt={this.props.name}/>
        <div className="movie-description">
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
