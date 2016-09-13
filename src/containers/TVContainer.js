import React from 'react';
import Media from '../components/Media';
import { constructFindTv,
        constructTvCasts,
        constructTvImages,
        constructTvVideos
      } from '../utils/TvUtils';

var TVContainer = React.createClass({
  componentDidMount: function() {
    var id = this.props.params.id;
    Promise.all([
        fetch(constructFindTv(id)),
        fetch(constructTvCasts(id)),
        fetch(constructTvImages(id)),
        fetch(constructTvVideos(id))
      ])
      .then(function(response){
        var promises = [
          Promise.resolve(response[0].json()),
          Promise.resolve(response[1].json()),
          Promise.resolve(response[2].json()),
          Promise.resolve(response[3].json())
        ]
        return Promise.all(promises);
      }).then(function(data){
        this.setState({
          movie: data[0],
          casts: data[1].cast,
          backdrop: data[2]["backdrops"][0],
          videos: data[3].results
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
      <Media {...this.state.movie}
             backdrop={this.state.backdrop}
             reviews={this.state.reviews}
             casts={this.state.casts}
             videos={this.state.videos}/>
    )
  }
});

export default TVContainer;
