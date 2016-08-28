import React from 'react';

var Review = React.createClass({
  render: function() {
    return (
      <div>
        <div className="customer-review">
          <h5>{this.props.author}</h5>
          <p>{this.props.content}</p>
        </div>
      </div>
    );
  }
});

export default Review;
