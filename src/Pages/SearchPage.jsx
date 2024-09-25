import Movie from '../components/Movie'
import Person from '../components/Person'
import { useSearchMulti } from '../hooks/useSearchMulti'
import '../components/Grid.css'
import './SearchPage.css'
import EmptyState from '../components/EmptyState'

export default function SearchPage ({ routeParams }) {
  let { query } = routeParams
  query = decodeURIComponent(query)
  const { loading, result } = useSearchMulti({ query })
  const { movies, series, persons, results } = result
  if (loading) {
    return <main style={{ height: '100vh' }} />
  }

  return (
    <main className='SearchResults container'>
      <div className='SearchInfo'>
        {movies ? <p>{movies} {movies > 1 ? 'Peliculas' : 'Pelicula'}</p> : ''}
        {series ? <p>{series} {series > 1 ? 'Series' : 'Serie'}</p> : ''}
        {persons ? <p>{persons} {persons > 1 ? 'Personas' : 'Persona'}</p> : ''}
      </div>
      {
        results.length > 0
          ? <RenderResults results={results} />
          : <EmptyState message='No hay resultados para esta busqueda' />
      }
    </main>
  )
}

function RenderResults ({ results }) {
  return (
    <section className='Grid'>
      {
        results.map(result => (
          ['tv', 'movie'].includes(result.mediaType)
            ? <Movie
                key={result.id}
                movie={result}
                mediaType={result.mediaType}
              />
            : <Person key={result.id} person={result} />
        ))
      }
    </section>
  )
}
