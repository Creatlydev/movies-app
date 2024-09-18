const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const LANGUAGE = 'es-ES'

export const API_ENDPOINTS = {
  // TRENDS
  TREND_MOVIES: (time) => `${BASE_URL}/trending/movie/${time}?api_key=${API_KEY}&language=${LANGUAGE}`,
  TREND_TV: (time) => `${BASE_URL}/trending/tv/${time}?api_key=${API_KEY}&language=${LANGUAGE}`,

  // MOVIE
  POPULAR_MOVIES: () => `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=${LANGUAGE}`,
  NOW_PLAYING_MOVIES: () => `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=${LANGUAGE}`,
  UPCOMING_MOVIES: () => `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=${LANGUAGE}`,
  TOP_RATED_MOVIES: () => `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=${LANGUAGE}`,
  SEARCH_MOVIES: (query) => `${BASE_URL}/search/movie?api_key=${API_KEY}&language=${LANGUAGE}&query=${query}`,
  MOVIE_DETAILS: (id) => `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=${LANGUAGE}`,

  // TV SERIES
  POPULAR_TV: () => `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=${LANGUAGE}`,
  AIRING_TODAY_TV: () => `${BASE_URL}/tv/airing_today?api_key=${API_KEY}&language=${LANGUAGE}`,
  ON_AIR_TV: () => `${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&language=${LANGUAGE}`,
  TOP_RATED_TV: () => `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=${LANGUAGE}`,
  SEARCH_TV: (query) => `${BASE_URL}/search/tv?api_key=${API_KEY}&language=${LANGUAGE}&query=${query}`,

  // PERSONS
  POPULAR_PERSON: () => `${BASE_URL}/person/popular?api_key=${API_KEY}&language=${LANGUAGE}`,
  SEARCH_PERSON: (query) => `${BASE_URL}/search/person?api_key=${API_KEY}&language=${LANGUAGE}&query=${query}`,

  // MULTIPLE SEARCH (MOVIES, TV and PEOPLES)
  SEARCH_MULTI: (query) => `${BASE_URL}/search/multi?api_key=${API_KEY}&language=${LANGUAGE}&query=${query}`,

  // SEARCH COLLECTION
  SEARCH_COLLECTION: (query) => `${BASE_URL}/search/collection?api_key=${API_KEY}&language=${LANGUAGE}&query=${query}`
}
