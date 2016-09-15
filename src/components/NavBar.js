import React from 'react';
import { Link, IndexLink } from 'react-router';

var NavBar = React.createClass({

  render: function() {
    return(
      <nav>
        <ul>
          <li className='nav-item'>
            <IndexLink to='/' 
              className="nav-item-link"
              activeClassName="nav-item-link-is-active">Movies
            </IndexLink>
          </li>
          <li className="nav-item">
            <Link to='/tv-series'
              className="nav-item-link"
              activeClassName="nav-item-link-is-active">TV Series
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
});

export default NavBar
