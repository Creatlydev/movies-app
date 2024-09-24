import { buildUrl } from './utils'

export const API_ENDPOINTS = {
  // TRENDS
  TREND_MOVIES: (time = 'day') => buildUrl(`trending/movie/${time}`),
  TREND_TV: (time = 'day') => buildUrl(`trending/tv/${time}`),

  // MOVIE
  POPULAR_MOVIES: () => buildUrl('movie/popular'),
  NOW_PLAYING_MOVIES: () => buildUrl('movie/now_playing'),
  UPCOMING_MOVIES: () => buildUrl('movie/upcoming'),
  TOP_RATED_MOVIES: () => buildUrl('movie/top_rated'),
  SEARCH_MOVIES: (query) => buildUrl('search/movie', { query }),
  MOVIE_DETAILS: (id) => buildUrl(`movie/${id}`),
  MOVIE_SIMILAR: (id) => buildUrl(`movie/${id}/similar`),
  MOVIE_RECOMMENDATIONS: (id) => buildUrl(`movie/${id}/recommendations`),
  // CREDITS
  MOVIE_CREDITS: (id) => buildUrl(`movie/${id}/credits`),

  // TV SERIES
  POPULAR_TV: () => buildUrl('tv/popular'),
  AIRING_TODAY_TV: () => buildUrl('tv/airing_today'),
  ON_AIR_TV: () => buildUrl('tv/on_the_air'),
  TOP_RATED_TV: () => buildUrl('tv/top_rated'),
  SEARCH_TV: (query) => buildUrl('search/tv', { query }),
  TV_DETAILS: (id) => buildUrl(`tv/${id}`, { language: 'en-US' }),
  TV_SIMILAR: (id) => buildUrl(`tv/${id}/similar`),
  TV_RECOMMENDATIONS: (id) => buildUrl(`tv/${id}/recommendations`),
  // CREDITS
  TV_CREDITS: (id) => buildUrl(`tv/${id}/credits`),

  // PERSONS
  POPULAR_PERSON: () => buildUrl('person/popular'),
  SEARCH_PERSON: (query) => buildUrl('search/person', { query }),
  DETAILS_PERSON: (id) => buildUrl(`person/${id}`, { language: 'en-US' }),
  PERSON_MOVIE_CREDITS: (id) => buildUrl(`person/${id}/movie_credits`),

  // MULTIPLE SEARCH (MOVIES, TV, and PEOPLE)
  SEARCH_MULTI: (query) => buildUrl('search/multi', { query }),

  // SEARCH COLLECTION
  SEARCH_COLLECTION: (query) => buildUrl('search/collection', { query }),

  // DISCOVER TYPE CONTENT TV
  DISCOVER_TV_BY_TYPE: (type) => buildUrl('discover/tv', { with_type: type }),

  // DISCOVER TV BY THEYR STATUS
  DISCOVER_TV_BY_STATUS: (status) => buildUrl('discover/tv', { with_status: status }),

  // CATEGORIES
  GENRES_MOVIE: () => buildUrl('genre/movie/list'),
  GENRES_TV: () => buildUrl('genre/tv/list'),

  // DISCOVER MOVIES BY CATEGORY
  DISCOVER_MOVIES_BY_CATEGORY: (id) => buildUrl('discover/movie', { with_genres: id }),

  // DISCOVER SERIES BY CATEGORY
  DISCOVER_SERIES_BY_CATEGORY: (id) => buildUrl('discover/tv', { with_genres: id }),

  // URL BASE IMAGES
  BASE_URL_IMAGE: 'https://image.tmdb.org/t/p'
}
