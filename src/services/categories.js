import { API_ENDPOINTS } from '../api/endPoints'
import { fetchFromApi } from '../api/utils'

export async function getCategories (mediaType) {
  const url = API_ENDPOINTS[
    mediaType === 'movie'
      ? 'GENRES_MOVIE'
      : 'GENRES_TV']()
  const { genres } = await fetchFromApi(url)
  return genres?.map(genre => ({
    id: genre.id,
    name: genre.name
  }))
}
