import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  propTypes: {
    type: React.PropTypes.string  
  },
  
  render: function() {
    return (
      <div className="media-item">
         <Link to={`/${this.props.type}/${this.props.id}`}>
          <img src={"http://image.tmdb.org/t/p/w154/" + this.props.poster_path} alt={this.props.name}/>
         </Link>
      </div>
    );
  }
});
