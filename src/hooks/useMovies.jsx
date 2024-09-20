import { useState, useCallback } from 'react'
import { getMovies as getMoviesFromEndpoint } from '../services/movies'

export function useMovies () {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  const getMovies = useCallback(async (endpoint) => {
    try {
      setLoading(true)
      const newMovies = await getMoviesFromEndpoint(endpoint)
      setMovies(newMovies)
    } catch (error) {
      console.error('Error fetching in useMovies CustomHook', error)
    } finally {
      setLoading(false)
    }
  }, [])

  return { movies, getMovies, loading }
}
