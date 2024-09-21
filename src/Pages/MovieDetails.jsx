import { useDetails } from '../hooks/useDetails'
import { getIdFromQuery } from '../utils/getIdFromQuery'

export default function MovieDetails ({ routeParams }) {
  const query = routeParams.query
  const id = getIdFromQuery({ query, sep: '-' })
  const { loading, details } = useDetails({ mediaType: 'movie', id })

  return (
    <main>
      {
        loading
          ? <p>Cargando detalles...</p>
          : (
            <>
              <img
                style={{
                  width: '300px'
                }}
                src={details.poster} alt=''
              />
              <h1>{details.title}</h1>
              <p>
                {details.description}
              </p>
            </>
            )
      }
    </main>
  )
}
