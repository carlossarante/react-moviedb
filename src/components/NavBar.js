import React from 'react';
import { Link, IndexLink } from 'react-router';

var NavBar = React.createClass({

  render: function() {
    return(
      <nav>
        <ul className="main-menu">
          <li>
            <IndexLink to='/' activeClassName="active-link">Movies</IndexLink>
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
