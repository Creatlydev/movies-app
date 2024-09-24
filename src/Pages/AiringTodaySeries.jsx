import { useEffect } from 'react'
import Grid from '../components/Grid'
import { useMovies } from '../hooks/useMovies'
import { API_ENDPOINTS } from '../api/endPoints'
import './GridPage.css'

export default function AiringTodaySeries () {
  const { movies, getMovies, loading } = useMovies()
  useEffect(() => {
    getMovies(API_ENDPOINTS.AIRING_TODAY_TV())
  }, [])

  if (loading) {
    <main style={{ height: '100vh' }} />
  }

  return (
    <main>
      <div className='container'>
        <h1>Series que se emiten hoy</h1>
        <Grid
          data={movies} mediaType='tv'
        />
      </div>
    </main>
  )
}
