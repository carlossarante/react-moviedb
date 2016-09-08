import { API_KEY } from '../constants/Config';

export function constructPopularTvSeries() {
  return ` //api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`;
}