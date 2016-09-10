import React from 'react';
import TruncateText from './TruncateText'

var Review = React.createClass({
  propTypes: {
    author: React.PropTypes.string,
    content: React.PropTypes.string
  },

  render: function() {
    return (
        <div className="customer-review" role="article">
          <div className="review-meta">
             <span>by {this.props.author}</span>
          </div>
          <TruncateText text={this.props.content} maxLength="300"/>
        </div>
    );
  }
});

export default Review;
