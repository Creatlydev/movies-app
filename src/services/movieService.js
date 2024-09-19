import { API_ENDPOINTS } from '../api/endpoints'
import { fetchFromApi } from '../api/utils'

export async function getPopularMovies () {
  const url = API_ENDPOINTS.POPULAR_MOVIES()
  return fetchFromApi(url)
}

export async function getNowPlayingMovies () {
  const url = API_ENDPOINTS.NOW_PLAYING_MOVIES()
  return fetchFromApi(url)
}

export async function getUpcomingMovies () {
  const url = API_ENDPOINTS.UPCOMING_MOVIES()
  return fetchFromApi(url)
}

export async function getTopRatedMovies () {
  const url = API_ENDPOINTS.TOP_RATED_MOVIES()
  return fetchFromApi(url)
}

export async function searchMovies (query) {
  const url = API_ENDPOINTS.SEARCH_MOVIES(query)
  return fetchFromApi(url)
}

export async function getMovieDetails (id) {
  const url = API_ENDPOINTS.MOVIE_DETAILS(id)
  return fetchFromApi(url)
}
