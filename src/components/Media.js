import React from 'react';
import ReviewList from './ReviewList';
import CastList from './CastList';

var Movie = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    overview: React.PropTypes.string,
    poster_path: React.PropTypes.string,
    vote_average: React.PropTypes.number,
    backdrop: React.PropTypes.object,
    reviews: React.PropTypes.arrayOf(React.PropTypes.shape),
    casts: React.PropTypes.arrayOf(React.PropTypes.shape),
    videos: React.PropTypes.array(React.PropTypes.shape)
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
          <li key={trailer.id} className="trailers-item">
            <iframe width="160" height="90" src={`https://www.youtube.com/embed/${trailer.key}`} frameBorder="0" allowFullScreen>
          </iframe>
          </li>
        )
      });
      return (
        <div id="trailers">
          <div className="trailers-highlight-left"></div>
          <div className="trailers-highlight-right"></div>
          <ul className="trailers-content">
            {trailers}
          </ul>
        </div>
      )
    }
 
  },

  render: function() {
    let title = this.props.title || this.props.name;

    return (
      <div className="l-container">
        {this.renderBackDrop()}
        {this.renderTrailers()}
        <div className="grid">
          <div className="col-3-10">
            <h2 className="movie-title">{title}</h2>
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

export default Movie;
