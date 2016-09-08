import React from 'react';
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
    return (
      <p>render tv serie {this.state.series.length} length</p>
    )
  }
});

export default TVSerieContainer;
