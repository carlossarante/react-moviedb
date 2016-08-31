import React from 'react';
import ReviewList from './ReviewList';
import Review from './Review';

var Movie = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    overview: React.PropTypes.string,
    poster_path: React.PropTypes.string,
    reviews: React.PropTypes.arrayOf(React.PropTypes.shape),
    casts: React.PropTypes.arrayOf(React.PropTypes.shape)
  },

  hasReviews: function() {
    return this.props.reviews.length > 0;
  },

  renderReviewList: function() {
    if(this.hasReviews()) {
      return (<ReviewList reviews={this.props.reviews} />)
    }
    return (<h2>this movie doesnt have review yet</h2>);
  },

  render: function() {
    return (
      <div className="container">
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
        {this.renderReviewList()}
      </div>
    );
  }
});

var CastList =  React.createClass({
  propTypes: {
    casts: React.PropTypes.array,
    limit_to_show: React.PropTypes.number
  },
  getDefaultProps: function() {
    return {
      casts: [],
      limit_to_show: 6
    }
  },

  hasMoreCasts: function() {
    return this.props.casts.length > this.props.limit_to_show;
  },

  renderLinkMoreCasts: function() {
    if (this.hasMoreCasts()) {
      return (
        <tr>
          <td colSpan="2">
          <a>See entire casts & crew</a>
          </td>
        </tr>
      )
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
            {this.renderLinkMoreCasts()}
          </tbody>
        </table>
      </div>
    );
  }
});

var Cast = React.createClass({
  propType: {
    name: React.PropTypes.string,
    profile_path: React.PropTypes.string
  },

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
