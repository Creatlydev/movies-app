import { useEffect } from 'react'
import Grid from '../components/Grid'
import { useMovies } from '../hooks/useMovies'
import { API_ENDPOINTS } from '../api/endpoints'
import './GridPage.css'

export default function TopRatedMovies () {
  const { movies, getMovies, loading } = useMovies()
  useEffect(() => {
    getMovies(API_ENDPOINTS.TOP_RATED_MOVIES())
  }, [])

  if (loading) {
    <main style={{ height: '100vh' }} />
  }

  return (
    <main>
      <div className='container'>
        <h1>Mejor valoradas</h1>
        <Grid
          data={movies} mediaType='movie'
        />
      </div>
    </main>
  )
}
