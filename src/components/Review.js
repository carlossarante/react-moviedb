import React from 'react';
import TruncateText from './TruncateText'

var Review = React.createClass({
  propTypes: {
    author: React.PropTypes.string,
    content: React.PropTypes.string
  },
  
  render: function() {
    return (
      <div>
        <div className="customer-review" role="article">
          <h5>{this.props.author}</h5>
          <TruncateText text={this.props.content} />
        </div>
      </div>
    );
  }
});

export default Review;
