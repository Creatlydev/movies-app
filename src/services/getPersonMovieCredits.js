import { API_ENDPOINTS } from '../api/endPoints'
import { fetchFromApi } from '../api/utils'

export async function getPersonMovieCredits (id) {
  const url = API_ENDPOINTS.PERSON_MOVIE_CREDITS(id)
  const response = await fetchFromApi(url)

  if (!response) return undefined

  const { cast } = response

  const filterCast = cast.filter(movie => movie.poster_path)

  return filterCast.map(movie => ({
    id: movie.id,
    poster: `${API_ENDPOINTS.BASE_URL_IMAGE}/w300/${movie.poster_path}`,
    releaseDate: movie.release_date,
    title: movie.title,
    voteAverage: parseFloat(movie.vote_average).toFixed(1)
  }))
}
