import React from 'react';

function constructFindMovie(id) {
  return `//api.themoviedb.org/3/movie/${id}?api_key=925a4602f6b05af1f8e2391a9a8e7c51`;
}

function constructMovieReviews(id) {
  return `//api.themoviedb.org/3/movie/${id}/reviews?api_key=925a4602f6b05af1f8e2391a9a8e7c51`;
}


function constructMovieCasts(id) {
  return `//api.themoviedb.org/3/movie/${id}/credits?api_key=925a4602f6b05af1f8e2391a9a8e7c51`;
}

var TVSerieContainer = React.createClass({

  componentDidMount: function() {
  },

  render: function() {
    return (
      <p>render tv serie</p>
    )
  }
});

export default TVSerieContainer;
