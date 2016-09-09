import React from 'react';
import MediaItem from './MediaItem';

export default React.createClass({
  propTypes: {
    type: React.PropTypes.string
  },
  
  render: function() {
    var medias = [];
    this.props.movies.forEach(function(media){
      medias.push(<MediaItem key={media.id} type={this.props.type} {...media} />);
    });
    return (
      <div className="media-list">
        {medias}
       </div>
    );
  }
});
