import React from 'react';
import MediaList from '../components/MediaList';
import NavSearch from '../components/NavSearch';
import { constructPopularTvSeries, constructTvSearchByTitle } from '../utils/TvUtils'

var TVSerieContainer = React.createClass({

  componentDidMount: function() {
    fetch(constructPopularTvSeries())
    .then( (series) => series.json() )
    .then( (series) => this.setState({ series: series.results }) )
  },

  getInitialState: function() {
    return {
      series: []
    }
  },
  
  searchTV: function(tvTitle) {
    if(tvTitle.trim().length > 0) {
      fetch(constructTvSearchByTitle(tvTitle),{'Access-Control-Allow-Origin': 'true'})
      .then(response => response.json())
      .then((tv) => this.setState({series: tv.results}));
    }
  },

  render: function() {
    var series = this.state.series;
    return (
      <div className="full-container">
        <NavSearch handleOnChange={this.searchTV} />
        <MediaList medias={series} type="tv" />
      </div>
    );
  }
});

export default TVSerieContainer;
