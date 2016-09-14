import React from 'react';
import CastItem from './CastItem';

var CastList =  React.createClass({
  propTypes: {
    casts: React.PropTypes.array,
    limit_to_show: React.PropTypes.number
  },

  getDefaultProps: function() {
    return {
      casts: [],
      limit_to_show: 6
    }
  },

  hasMoreCasts: function() {
    return this.props.casts.length > this.props.limit_to_show;
  },

  renderLinkMoreCasts: function() {
    if (this.hasMoreCasts()) {
      return (
        <tr>
          <td colSpan="2">
          <a>See entire casts & crew</a>
          </td>
        </tr>
      )
    }
  },

  renderCasts: function () {
    var casts = this.props.casts.slice(0, this.props.limit_to_show).map((cast) => {
      return (<CastItem key={cast.id} {...cast} />)
    });
    return casts;
  },

  render: function() {
    return (
      <div className="col-3-10">
        <h2>Casts</h2>
        <table className="cast-list">
          <tbody>
            {this.renderCasts()}
            {this.renderLinkMoreCasts()}
          </tbody>
        </table>
      </div>
    );
  }
});

export default CastList;