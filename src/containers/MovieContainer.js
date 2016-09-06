import React from 'react';
import Movie from '../components/Movie';
import { constructFindMovie,
        constructMovieReviews,
        constructMovieCasts,
        constructMovieImages,
        constructMovieVideos
      } from '../utils/MovieUtils'

var MovieContainer = React.createClass({
  componentDidMount: function() {
    var id = this.props.params.id;
    Promise.all([
        fetch(constructFindMovie(id)),
        fetch(constructMovieReviews(id)),
        fetch(constructMovieCasts(id)),
        fetch(constructMovieImages(id)),
        fetch(constructMovieVideos(id))
      ])
      .then(function(response){
        var promises = [
          Promise.resolve(response[0].json()),
          Promise.resolve(response[1].json()),
          Promise.resolve(response[2].json()),
          Promise.resolve(response[3].json()),
          Promise.resolve(response[4].json())
        ]
        return Promise.all(promises);
      }).then(function(data){
        console.log(data[4])
        this.setState({
          movie: data[0],
          reviews: data[1].results,
          casts: data[2].cast,
          backdrop: data[3]["backdrops"][0],
          videos: data[4].results
        });
      }.bind(this));
  },

  getInitialState: function() {
    return {
      movie: {},
      reviews: [],
      backdrop: {},
      videos: []
    }
  },
  render: function() {
    return (
      <Movie {...this.state.movie}
             backdrop={this.state.backdrop}
             reviews={this.state.reviews}
             casts={this.state.casts}
             videos={this.state.videos}/>
    )
  }
});

export default MovieContainer;
