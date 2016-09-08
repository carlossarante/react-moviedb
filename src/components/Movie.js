import React from 'react';
import ReviewList from './ReviewList';
import Review from './Review';

var Movie = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    overview: React.PropTypes.string,
    poster_path: React.PropTypes.string,
    backdrop: React.PropTypes.object,
    reviews: React.PropTypes.arrayOf(React.PropTypes.shape),
    casts: React.PropTypes.arrayOf(React.PropTypes.shape)
  },

  hasReviews: function() {
    return this.props.reviews.length > 0;
  },

  hasBackDrop: function() {
    return this.props.backdrop.file_path !== undefined;
  },

  renderBackDrop: function() {
    if(this.hasBackDrop()) {
      return (
        <div className="movie-backdrop">
          <img src={`//image.tmdb.org/t/p/w1280/${this.props.backdrop.file_path}`}  alt={this.props.title}/>
        </div>
      )
    }
    return null;
  },

  renderReviewList: function() {
    if(this.hasReviews()) {
      return (<ReviewList reviews={this.props.reviews} />)
    }
    return (<h2>this movie doesnt have review yet</h2>);
  },

  hasTrailers: function() {
    return this.props.videos.length > 0;
  },

  renderTrailers: function() {
    if(this.hasTrailers()) {
      var videos = this.props.videos.slice(0, 5);
      var trailers = videos.map(function(trailer) {
        return (
          <li key={trailer.id} className="trailer">
            <iframe width="160" height="90" src={`https://www.youtube.com/embed/${trailer.key}`} frameBorder="0" allowFullScreen>
          </iframe>
          </li>
        )
      });
      return (
        <div id="trailers">
          <div className="fade-left"></div>
          <div className="fade-right"></div>
          <ul className="content">
            {trailers}
          </ul>
        </div>
      )
    }
 
  },

  render: function() {
    return (
      <div className="container">
        {this.renderBackDrop()}
        {this.renderTrailers()}
        <div className="grid">
          <div className="col-3-10">
            <h2 className="movie-title">{this.props.title}</h2>
            <img src={`http://image.tmdb.org/t/p/w185/${this.props.poster_path}`} alt={this.props.title}/>
            <div className="movie-metadata">
              <span className="movie-vote-average">{this.props.vote_average} <span>/ 10</span></span>
            </div>
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

  renderCasts: function () {
    var casts = this.props.casts.slice(0, this.props.limit_to_show).map((cast) => {
      return (<Cast key={cast.id} {...cast} />)
    });
    return casts;
  },

  render: function() {
    return (
      <div className="col-3-10">
        <h2>Casts</h2>
        <table className="cast-list">
          <tbody>
            {this.renderCasts()}
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
