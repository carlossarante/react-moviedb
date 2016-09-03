import React from 'react';
import { Link } from 'react-router';

var NavBar = React.createClass({

  render: function() {
    return(
      <nav>
        <ul>
          <li>
            <Link to='/' activeClassName="active-link">Movies</Link>
          </li>
          <li>
            <Link to='/tv-series' activeClassName="active-link">TV Series</Link>
          </li>
        </ul>
      </nav>
    );
  }
});

export default NavBar
