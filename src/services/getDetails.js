import { API_ENDPOINTS } from '../api/endPoints'
import { fetchFromApi } from '../api/utils'

export async function getDetails (mediaType, id) {
  const url = API_ENDPOINTS[
    mediaType === 'movie'
      ? 'MOVIE_DETAILS'
      : 'TV_DETAILS'](id)
  const details = await fetchFromApi(url)
  if (!details) return null
  const mappedDetails = mediaType === 'movie'
    ? mappedMovieDetails(details)
    : mappedSerieDetails(details)

  return mappedDetails
}

function mappedMovieDetails (details) {
  return {
    adult: details.adult,
    backdropPath: `${API_ENDPOINTS.BASE_URL_IMAGE}/w1920_and_h800_multi_faces/${details.backdrop_path}`,
    genres: details.genres,
    originalLanguage: details.original_language,
    originalTitle: details.original_title,
    description: details.overview,
    popularity: details.popularity,
    poster: `${API_ENDPOINTS.BASE_URL_IMAGE}/w300/${details.poster_path}`,
    releaseDate: details.release_date,
    title: details.title,
    voteAverage: parseFloat(details.vote_average).toFixed(1),
    hours: parseInt(details.runtime / 60),
    minutes: details.runtime % 60
  }
}

function mappedSerieDetails (details) {
  return {
    adult: details.adult,
    backdropPath: `${API_ENDPOINTS.BASE_URL_IMAGE}/w1920_and_h800_multi_faces/${details.backdrop_path}`,
    genres: details.genres,
    originalLanguage: details.original_language,
    originalTitle: details.original_name,
    description: details.overview,
    popularity: details.popularity,
    poster: `${API_ENDPOINTS.BASE_URL_IMAGE}/w300/${details.poster_path}`,
    releaseDate: details.release_date,
    title: details.name,
    voteAverage: parseFloat(details.vote_average).toFixed(1)
  }
}
