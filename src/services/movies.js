import { API_ENDPOINTS } from '../api/endpoints'
import { fetchFromApi } from '../api/utils'

export async function getPopularMovies () {
  const url = API_ENDPOINTS.POPULAR_MOVIES()
  return fetchFromApi(url)
}

export async function getNowPlayingMovies () {
  const url = API_ENDPOINTS.NOW_PLAYING_MOVIES()
  return fetchFromApi(url)
}

export async function getUpcomingMovies () {
  const url = API_ENDPOINTS.UPCOMING_MOVIES()
  return fetchFromApi(url)
}

export async function getTopRatedMovies () {
  const url = API_ENDPOINTS.TOP_RATED_MOVIES()
  return fetchFromApi(url)
}

export async function searchMovies (query) {
  const url = API_ENDPOINTS.SEARCH_MOVIES(query)
  return fetchFromApi(url)
}

export async function getMovieDetails (id) {
  const url = API_ENDPOINTS.MOVIE_DETAILS(id)
  return fetchFromApi(url)
}

export async function getRandomImages ({ url, n = 1 }) {
  const { results } = await fetchFromApi(url)
  const randomData = []
  if (results.length > 0) {
    const randomsIndex = []
    while (randomData.length < n) {
      const newRandomIndex = Math.floor(Math.random() * (results.length - 1))
      if (randomsIndex.includes(newRandomIndex)) continue
      randomData.push(
        results[newRandomIndex]
      )
      randomsIndex.push(newRandomIndex)
    }

    // Mapeamos randomData para solo devolver las imagenes
    return randomData.map(data => ({
      poster: `${API_ENDPOINTS.BASE_URL_IMAGE}/w1280/${data.backdrop_path}`
    }))
  }
}

export async function getMovies (url) {
  const { results } = await fetchFromApi(url)
  const filterResultWithoutPosterImage = results.filter(movie => movie.poster_path)
  return filterResultWithoutPosterImage?.map(movie => ({
    id: movie.id,
    title: movie.title || movie.name,
    releaseDate: movie.release_date || movie.first_air_date,
    voteAverage: movie.vote_average,
    poster: `${API_ENDPOINTS.BASE_URL_IMAGE}/w300${movie.poster_path}`,
    backdropPath: `${API_ENDPOINTS.BASE_URL_IMAGE}/w1280${movie.backdrop_path || movie.poster_path}`
  }))
}
