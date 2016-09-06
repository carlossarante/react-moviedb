export function constructMovieSearchByTitle(movieTitle) {
  return `//api.themoviedb.org/3/search/movie?api_key=925a4602f6b05af1f8e2391a9a8e7c51&query=${movieTitle}`;
}

export function constructPopularMovies() {
  return `//api.themoviedb.org/3/movie/popular?api_key=925a4602f6b05af1f8e2391a9a8e7c51`;
}

export function constructFindMovie(id) {
  return `//api.themoviedb.org/3/movie/${id}?api_key=925a4602f6b05af1f8e2391a9a8e7c51`;
}

export function constructMovieReviews(id) {
  return `//api.themoviedb.org/3/movie/${id}/reviews?api_key=925a4602f6b05af1f8e2391a9a8e7c51`;
}

export function constructMovieCasts(id) {
  return `//api.themoviedb.org/3/movie/${id}/credits?api_key=925a4602f6b05af1f8e2391a9a8e7c51`;
}

export function constructMovieImages(id) {
  return `//api.themoviedb.org/3/movie/${id}/images?api_key=925a4602f6b05af1f8e2391a9a8e7c51`;
}

export function constructMovieVideos(id) {
  return `//api.themoviedb.org/3/movie/${id}/videos?api_key=925a4602f6b05af1f8e2391a9a8e7c51`;
}
