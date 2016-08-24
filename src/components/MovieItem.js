import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render: function() {
    return (
      <div className="movie">
        <img src={"http://image.tmdb.org/t/p/w185/" + this.props.poster_path} alt={this.props.name}/>
        <h3><Link to={`/movie/${this.props.id}`} >{this.props.title}</Link></h3>
      </div>
    );
  }
});
