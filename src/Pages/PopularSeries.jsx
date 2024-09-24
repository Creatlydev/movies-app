import { useEffect } from 'react'
import Grid from '../components/Grid'
import { useMovies } from '../hooks/useMovies'
import { API_ENDPOINTS } from '../api/endPoints'
import './GridPage.css'

export default function PopularSeries () {
  const { movies, getMovies, loading } = useMovies()
  useEffect(() => {
    getMovies(API_ENDPOINTS.POPULAR_TV())
  }, [])

  if (loading) {
    <main style={{ height: '100vh' }} />
  }

  return (
    <main>
      <div className='container'>
        <h1>Series mas populares</h1>
        <Grid
          data={movies} mediaType='tv'
        />
      </div>
    </main>
  )
}
