import { API_ENDPOINTS } from '../api/endPoints'
import { fetchFromApi } from '../api/utils'

export async function searchMulti (query) {
  const url = API_ENDPOINTS.SEARCH_MULTI(query)
  let { results } = await fetchFromApi(url)
  let [series, movies, persons] = [0, 0, 0]
  const filterResults = results.filter(result => result.poster_path || result.profile_path)

  results = filterResults.map(result => {
    if (result.media_type === 'movie' || result.media_type === 'tv') {
      result.media_type === 'movie' ? (movies++) : (series++)
      return {
        id: result.id,
        title: result.name || result.title,
        poster: `${API_ENDPOINTS.BASE_URL_IMAGE}/w300/${result.poster_path}`,
        releaseDate: result.release_date || result.first_air_date,
        mediaType: result.media_type,
        voteAverage: result.vote_average
      }
    } else if (result.media_type === 'person') {
      persons++
      return {
        id: result.id,
        name: result.name,
        profile: `${API_ENDPOINTS.BASE_URL_IMAGE}/w300/${result.profile_path}`,
        mediaType: result.media_type
      }
    }

    return null
  })

  return { results, series, movies, persons }
}
