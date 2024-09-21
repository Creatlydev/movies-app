import { useDetails } from '../hooks/useDetails'
import { getIdFromQuery } from '../utils/getIdFromQuery'

export default function SerieDetails ({ routeParams }) {
  const query = routeParams.query
  const id = getIdFromQuery({ query, sep: '-' })
  const { loading, details } = useDetails({ mediaType: 'tv', id })

  return (
    <main>
      {
        loading
          ? <p>Cargando detalles...</p>
          : (
            <>
              <img src={details.backdropPath} alt='' />
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
