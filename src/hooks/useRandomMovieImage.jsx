import { useState, useEffect } from 'react'
import { API_ENDPOINTS } from '../api/endPoints'
import { getRandomImages } from '../services/movies'

export function useRandomMovieImage () {
  const [backgroundImage, setBackgroundImage] = useState('')

  useEffect(() => {
    async function fetchTrendMovieImage () {
      try {
        const [{ poster }] = await getRandomImages({
          url: API_ENDPOINTS.TREND_MOVIES(),
          n: 1
        })

        setBackgroundImage(poster)
      } catch (error) {
        console.error('Error fetching trending movies:', error)
      }
    }

    fetchTrendMovieImage()
  }, [])

  return backgroundImage || null
}
