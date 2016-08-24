import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="movie">
        <img src={"http://image.tmdb.org/t/p/w185/" + this.props.poster_path} alt={this.props.name}/>
        <h3>{this.props.title}</h3>
      </div>
    );
  }
});
