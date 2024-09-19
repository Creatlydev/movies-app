import { useState, useCallback } from 'react'
import { getTrendMovies } from '../services/movies'

export function useMovies ({ get, time = 'day' }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  const getMovies = useCallback(async () => {
    try {
      setLoading(true)
      if (get === 'trends') {
        const movies = await getTrendMovies(time)
        setMovies(movies)
      }
    } catch (error) {
      console.error('Error fetching in useMovies CustomHook', error)
    } finally {
      setLoading(false)
    }
  }, [])

  return { movies, getMovies, loading }
}
