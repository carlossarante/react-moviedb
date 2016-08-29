import React from 'react';
import ReviewList from './ReviewList';
import Review from './Review';

var Movie = React.createClass({
  render: function() {
    return (
      <div className="container">
        <MovieInfo {...this.props.movie}
                  casts={this.props.casts}/>
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
        <CastList casts={this.props.casts}/>
      </div>
    );
  }
});

var CastList =  React.createClass({
  getDefaultProps: function() {
    return {
      casts: [],
      limit_to_show: 6
    }
  },
  render: function() {
    var casts = this.props.casts.slice(0, this.props.limit_to_show).map((cast) => {
      return (<Cast key={cast.id} {...cast} />)
    });
    return (
      <div className="col-3-10">
        <h2>Casts</h2>
        <table className="cast-list">
          <tbody>
            {casts}
          </tbody>
        </table>
      </div>
    );
  }
});

var Cast = React.createClass({
  render: function() {
    return (
      <tr>
        <td className="primary-photo">
          <img src={`http://image.tmdb.org/t/p/w45/${this.props.profile_path}`} alt={this.props.name} />
        </td>
        <td>
          {this.props.name}
        </td>
      </tr>
    );
  }
})

export default Movie;
