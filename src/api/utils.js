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

// Generic function to request to API
export async function fetchFromApi (url) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText || 'Error to get response'}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
