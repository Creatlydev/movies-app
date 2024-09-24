import { useEffect } from 'react'

import { API_ENDPOINTS } from '../api/endPoints'
import { useMovies } from '../hooks/useMovies'
import { getIdFromQuery } from '../utils/getIdFromQuery'
import Grid from '../components/Grid'
import './GridPage.css'

export default function CategoryMovies ({ routeParams }) {
  const { query } = routeParams
  const id = getIdFromQuery({ query, sep: '-' })
  const nameCategory = decodeURIComponent(query.split('-')[1])
  const { movies, getMovies, loading } = useMovies()
  useEffect(() => {
    getMovies(API_ENDPOINTS.DISCOVER_MOVIES_BY_CATEGORY(id))
  }, [])

  if (loading) {
    return <main style={{ height: '100vh' }} />
  }

  return (
    <main className='container'>
      <h1>Peliculas de {nameCategory}</h1>
      <Grid
        data={movies} mediaType='movie'
      />
    </main>
  )
}
