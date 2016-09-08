import { API_KEY } from '../constants/Config';

export function constructMovieSearchByTitle(movieTitle) {
  return `//api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieTitle}`;
}

export function constructPopularMovies() {
  return `//api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
}

export function constructFindMovie(id) {
  return `//api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
}

export function constructMovieReviews(id) {
  return `//api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`;
}

export function constructMovieCasts(id) {
  return `//api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`;
}

export function constructMovieImages(id) {
  return `//api.themoviedb.org/3/movie/${id}/images?api_key=${API_KEY}`;
}

export function constructMovieVideos(id) {
  return `//api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
}
