import { API_ENDPOINTS } from '../api/endPoints'
import { fetchFromApi } from '../api/utils'

export async function getPersonDetails (id) {
  const url = API_ENDPOINTS.DETAILS_PERSON(id)
  const details = await fetchFromApi(url)

  return {
    biography: details.biography,
    name: details.name,
    birthday: details.birthday,
    gender: details.gender === 2 ? 'Masculino' : 'Femenino',
    knownFor: details.known_for_department,
    placeOfBirth: details.place_of_birth,
    profile: `${API_ENDPOINTS.BASE_URL_IMAGE}/w300/${details.profile_path}`
  }
}
