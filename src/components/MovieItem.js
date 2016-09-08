import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render: function() {
    return (
      <div className="movie">
         <Link to={`/movie/${this.props.id}`}>
          <img src={"http://image.tmdb.org/t/p/w154/" + this.props.poster_path} alt={this.props.name}/>
         </Link>
        <h3><Link to={`/movie/${this.props.id}`} >{this.props.title}</Link></h3>
      </div>
    );
  }
});
