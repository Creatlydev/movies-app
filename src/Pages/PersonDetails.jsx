import Movies from '../components/Movies'
import { usePersonDetails } from '../hooks/usePersonDetails'
import { getIdFromQuery } from '../utils/getIdFromQuery'
import NotFound from './NotFound'
import './PersonDetails.css'

export default function PersonDetails ({ routeParams }) {
  const { query } = routeParams
  const id = getIdFromQuery({ query, sep: '-' })
  const { loading, personDetails, personMovieCredits } = usePersonDetails({ id })

  if (loading) {
    return <main style={{ height: '100vh' }} />
  }

  if (!personDetails || !personMovieCredits) return <NotFound />

  const {
    name,
    biography,
    birthday,
    knownFor,
    placeOfBirth,
    profile,
    gender
  } = personDetails

  return (
    <main>
      <div className='container'>
        <section className='DetailsPerson'>
          <figure className='Profile'>
            <img src={profile} alt={name} />
            <figcaption>Foto de {name}</figcaption>
          </figure>

          <div className='Biography'>
            <h1>{name}</h1>
            <p>
              {biography || 'Biografia no disponible'}
            </p>
            <hr />
            <span>Conocido por</span>
            <Movies movies={personMovieCredits} mediaType='movie' />
          </div>

          <aside
            className='DetailsData'
            aria-labelledby={`Informacion personal de ${name}`}
          >

            <h2>Información personal</h2>
            <dl>
              <dt>Conocido por</dt>
              <dd>{knownFor || 'No disponible'}</dd>

              <dt>Sexo</dt>
              <dd>{gender}</dd>

              <dt>Fecha de nacimiento</dt>
              <dd>{birthday ? new Date(birthday).toLocaleDateString('es-ES') : 'No disponible'}</dd>

              <dt>Lugar de nacimiento</dt>
              <dd>{placeOfBirth || 'No disponible'}</dd>
            </dl>
          </aside>
        </section>
      </div>
    </main>
  )
}
