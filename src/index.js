import "babel-polyfill";
import "isomorphic-fetch";
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './containers/App';
import MoviesContainer from './containers/MoviesContainer';
import MovieContainer from './containers/MovieContainer';
import Movie from './Movie';
import MovieList from './components/MovieList';
import './styles/main.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={MoviesContainer} />
      <Route path="/movie/:id" component={MovieContainer} />
    </Route>
  </Router>,
  document.getElementById('root')
);
