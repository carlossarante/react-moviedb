import { API_KEY } from '../constants/Config';

export function constructPopularTvSeries() {
  return ` //api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`;
};

export function constructFindTv(id) {
  return `//api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`;
};

export function constructTvCasts(id) {
  return `//api.themoviedb.org/3/tv/${id}/credits?api_key=${API_KEY}`;
};

export function constructTvImages(id) {
  return `//api.themoviedb.org/3/tv/${id}/images?api_key=${API_KEY}`;
};

export function constructTvVideos(id) {
  return `//api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}`;
};
