import React from 'react';
import MediaItem from './MediaItem';

export default React.createClass({
  propTypes: {
    type: React.PropTypes.string,
    medias: React.PropTypes.arrayOf(React.PropTypes.shape)
  },

  render: function() {
    var medias = [];
    var type = this.props.type;
    this.props.medias.forEach(function(media){
      medias.push(<MediaItem key={media.id}
                    type={type}
                    {...media} />);
    });

    return (
      <div className="media-list">
        {medias}
       </div>
    );
  }
});
