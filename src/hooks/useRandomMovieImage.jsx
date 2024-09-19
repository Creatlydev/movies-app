import { useState, useEffect } from 'react'
import { fetchFromApi } from '../api/utils'
import { API_ENDPOINTS } from '../api/endPoints'

export function useRandomMovieImage () {
  const [backgroundImage, setBackgroundImage] = useState('')

  useEffect(() => {
    async function fetchTrendMovieImage () {
      try {
        const { results } = await fetchFromApi(API_ENDPOINTS.TREND_MOVIES())

        if (results.length > 0) {
          const randomMovie = results[
            Math.floor(Math.random() * (results.length - 1))
          ]

          setBackgroundImage(randomMovie.backdrop_path)
        }
      } catch (error) {
        console.error('Error fetching trending movies:', error)
      }
    }

    fetchTrendMovieImage()
  }, [])

  return backgroundImage ? `${API_ENDPOINTS.BASE_URL_IMAGE}/w1280/${backgroundImage}` : null
}
