import React from 'react';
import MediaList from '../components/MediaList';
import NavSearch from '../components/NavSearch';
import { constructPopularTvSeries } from '../utils/TvUtils'

var TVSerieContainer = React.createClass({

  componentDidMount: function() {
    fetch(constructPopularTvSeries())
    .then((series) => series.json() )
    .then( (series ) => this.setState({ series: series.results }) )
  },

  getInitialState: function() {
    return {
      series: []
    }
  },

  render: function() {
    var series = this.state.series;
    return (
      <div className="full-container">
        <NavSearch handleOnChange={this.searchMovie} />
        <MediaList medias={series} type="tv" />
      </div>
    );
  }
});

export default TVSerieContainer;
