import React from 'react';
import Review from './Review';

var ReviewsList = React.createClass({
  render: function() {
    var reviews = this.props.reviews.map(function(review){
      return (
        <Review key={review.id} {...review} />
      );
    });
    return (
      <div className="grid">
        <div id="customer-reviews" className="col-offset-3-10">
          <h2>User reviews</h2>
          {reviews}
        </div>
      </div>
    );
  }
});

export default ReviewsList;
