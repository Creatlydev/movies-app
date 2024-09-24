import { useEffect } from 'react'
import Grid from '../components/Grid'
import { useMovies } from '../hooks/useMovies'
import { API_ENDPOINTS } from '../api/endPoints'
import './GridPage.css'

export default function UpcomingMoviesPage () {
  const { movies, getMovies, loading } = useMovies()
  useEffect(() => {
    getMovies(API_ENDPOINTS.UPCOMING_MOVIES())
  }, [])

  if (loading) {
    <main style={{ width: '60vh' }} />
  }

  return (
    <main>
      <div className='container'>
        <h1>Proximamente</h1>
        <Grid
          data={movies} mediaType='movie'
        />
      </div>
    </main>
  )
}
