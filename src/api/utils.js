const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const LANGUAGE = 'es-ES'

// Función para construir URLs
export const buildUrl = (path, params = {}) => {
  const url = new URL(`${BASE_URL}/${path}`)
  url.searchParams.append('api_key', API_KEY)
  url.searchParams.append('language', LANGUAGE)

  Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]))

  return url.toString()
}
