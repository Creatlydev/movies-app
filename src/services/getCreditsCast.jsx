import { API_ENDPOINTS } from '../api/endPoints'
import { fetchFromApi } from '../api/utils'

export async function getCreditsCast (mediaType, id) {
  const url = API_ENDPOINTS[
    mediaType === 'movie'
      ? 'MOVIE_CREDITS'
      : 'TV_CREDITS'](id)
  const response = await fetchFromApi(url)

  if (!response) return undefined
  const { cast } = response

  const filterCast = cast.filter(person => person.profile_path)

  return filterCast?.map(person => ({
    id: person.id,
    name: person.name,
    character: person.character,
    profile: `${API_ENDPOINTS.BASE_URL_IMAGE}/w300/${person.profile_path}`
  }))
}
