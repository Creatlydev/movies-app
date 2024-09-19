import { API_ENDPOINTS } from '../api/endpoints'
import { fetchFromApi } from '../api/utils'

export async function getPopularSeries () {
  const url = API_ENDPOINTS.POPULAR_TV()
  return fetchFromApi(url)
}

export async function getAiringTodaySeries () {
  const url = API_ENDPOINTS.AIRING_TODAY_TV()
  return fetchFromApi(url)
}

export async function getOnAirSeries () {
  const url = API_ENDPOINTS.ON_AIR_TV()
  return fetchFromApi(url)
}

export async function getTopRatedSeries () {
  const url = API_ENDPOINTS.TOP_RATED_TV()
  return fetchFromApi(url)
}

export async function searchSeries (query) {
  const url = API_ENDPOINTS.SEARCH_TV(query)
  return fetchFromApi(url)
}
