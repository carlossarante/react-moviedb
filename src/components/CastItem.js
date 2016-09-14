import React from 'react';

var CastItem = React.createClass({
  propType: {
    name: React.PropTypes.string,
    profile_path: React.PropTypes.string
  },

  render: function() {
    return (
      <tr>
        <td className="primary-photo">
          <img src={`http://image.tmdb.org/t/p/w45/${this.props.profile_path}`} alt={this.props.name} />
        </td>
        <td>
          {this.props.name}
        </td>
      </tr>
    );
  }
});

export default CastItem;