import { API_ENDPOINTS } from '../api/endPoints'
import { fetchFromApi } from '../api/utils'

export async function getDetails (mediaType, id) {
  const url = API_ENDPOINTS[
    mediaType === 'movie'
      ? 'MOVIE_DETAILS'
      : 'TV_DETAILS'](id)
  const details = await fetchFromApi(url)

  return {
    adult: details.adult,
    backdropPath: `${API_ENDPOINTS.BASE_URL_IMAGE}/w1280/${details.backdrop_path}`,
    genres: details.genres,
    originalLanguage: details.original_language,
    originalTitle: details.original_title,
    description: details.overview,
    popularity: details.popularity,
    poster: `${API_ENDPOINTS.BASE_URL_IMAGE}/w300/${details.poster_path}`,
    releaseDate: details.release_date,
    title: details.title,
    voterAverage: details.vote_average
  }
}
