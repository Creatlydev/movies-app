import { useEffect } from 'react'
import Grid from '../components/Grid'
import { useMovies } from '../hooks/useMovies'
import { API_ENDPOINTS } from '../api/endPoints'
import './GridPage.css'

export default function NowPlayingMovies () {
  const { movies, getMovies, loading } = useMovies()
  useEffect(() => {
    getMovies(API_ENDPOINTS.NOW_PLAYING_MOVIES())
  }, [])

  if (loading) {
    <main style={{ height: '100vh' }} />
  }

  return (
    <main>
      <div className='container'>
        <h1>En cartelera</h1>
        <Grid
          data={movies} mediaType='movie'
        />
      </div>
    </main>
  )
}
