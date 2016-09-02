import React from 'react';
import Movie from '../components/Movie';

function constructFindMovie(id) {
  return `//api.themoviedb.org/3/movie/${id}?api_key=925a4602f6b05af1f8e2391a9a8e7c51`;
}

function constructMovieReviews(id) {
  return `//api.themoviedb.org/3/movie/${id}/reviews?api_key=925a4602f6b05af1f8e2391a9a8e7c51`;
}


function constructMovieCasts(id) {
  return `//api.themoviedb.org/3/movie/${id}/credits?api_key=925a4602f6b05af1f8e2391a9a8e7c51`;
}

function constructMovieImages(id) {
  return `//api.themoviedb.org/3/movie/${id}/images?api_key=925a4602f6b05af1f8e2391a9a8e7c51`;
}

var MovieContainer = React.createClass({
  componentDidMount: function() {
    var id = this.props.params.id;
    Promise.all([
        fetch(constructFindMovie(id)),
        fetch(constructMovieReviews(id)),
        fetch(constructMovieCasts(id)),
        fetch(constructMovieImages(id))
      ])
      .then(function(response){
          var p1 = Promise.resolve(response[0].json());
          var p2 = Promise.resolve(response[1].json());
          var p3 = Promise.resolve(response[2].json());
          var p4 = Promise.resolve(response[3].json());
          return Promise.all([p1, p2, p3, p4]);
      }).then(function(data){
        this.setState({
          movie: data[0],
          reviews: data[1].results,
          casts: data[2].cast,
          backdrop: data[3]["backdrops"][0]
        });
      }.bind(this));
  },

  getInitialState: function() {
    return {
      movie: {},
      reviews: [
      ],
      backdrop: {}
    }
  },
  render: function() {
    return (
      <Movie {...this.state.movie}
             backdrop={this.state.backdrop}
             reviews={this.state.reviews}
             casts={this.state.casts}/>
    )
  }
});

export default MovieContainer;
