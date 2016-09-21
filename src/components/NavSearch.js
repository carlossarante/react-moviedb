import React from 'react';

export default React.createClass({
  render: function() {
    return (
        <input placeholder="Search..."
              type="text"
              ref="textSearch"
            onChange={() => this.props.handleOnChange(this.refs.textSearch.value)}
            className="text-search"/>
    );
  }
});
