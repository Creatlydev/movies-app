import { API_ENDPOINTS } from '../api/endPoints'
import EmptyState from '../components/EmptyState'
import { StarBold } from '../components/Icons'
import { Link } from '../components/Link'
import Person from '../components/Person'
import MoviesWithBackground from '../components/Sections/MoviesWithBackground'
import SkeletonDetails from '../components/skeleton/SkeletonDetails'
import { useDetails } from '../hooks/useDetails'
import { getIdFromQuery } from '../utils/getIdFromQuery'

import './MovieDetails.css'

function similarSeries (id) {
  const tabs = [
    {
      label: 'Recomendaciones',
      labelledby: 'Series recomendadas para ti',
      endpoint: API_ENDPOINTS.TV_RECOMMENDATIONS(id)
    },
    {
      label: 'Similares',
      labelledby: 'Series similares',
      endpoint: API_ENDPOINTS.TV_SIMILAR(id)
    }
  ]

  return tabs
}

export default function SerieDetails ({ routeParams }) {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  const query = routeParams.query
  const id = getIdFromQuery({ query, sep: '-' })
  const { loading, details, cast } = useDetails({ mediaType: 'tv', id })
  const year = details?.releaseDate?.split('-')[0]
  let runtime = details.hours ? `${details.hours}h ` : ''
  runtime += details.minutes ? `${details.minutes}m`.padStart(2, '0') : ''

  const tabs = similarSeries(id)

  if (loading) {
    return (
      <SkeletonDetails />
    )
  }

  return (
    <>
      <main>

        <section
          className='HeroBackground'
          style={{
            '--bg-image': `url(${details.backdropPath})`
          }}
        >
          <div className='container'>
            <div>
              <header className='Info'>
                <time
                  className='InfoYear'
                  dateTime={details.releaseDate}
                >
                  {year}
                </time>
                <h1 className='InfoTitle'>{details.title}</h1>
                <div className='InfoGroup'>
                  <div className='InfoGenres'>
                    {
                          details.genres.map(genre => (
                            <Link
                              key={genre.id}
                              className='InfoGenreLink'
                              to={`category/${genre.id}-${genre.name}`}
                            >
                              {genre.name}
                            </Link>
                          ))
                        }
                  </div>
                  <div className='InfoRuntime'>
                    {runtime}
                  </div>
                </div>

                <div className='InfoDetails'>
                  <span className={`InfoDetails-avaiable ${details.adult ? 'adult' : ''}`}>
                    {details.adult ? '+18' : '+13'}
                  </span>
                  <div className='MoviesScroller-userScore'>
                    {details.voteAverage}
                    <StarBold className='icon' style={{ width: '16' }} />
                  </div>
                </div>

              </header>
              <div className='Description'>
                <p>
                  {details.description}
                </p>
              </div>
            </div>

            <img className='DescriptionPoster' src={details.poster} alt={details.title} />
          </div>
        </section>

        <div>
          <section className='Credits container'>
            <h2 className='CreditsTitle'>Reparto de la serie</h2>
            <ul className='CreditsScroller'>
              {
                !cast.length
                  ? <EmptyState message='No se encontraron atribuciones para esta serie' />
                  : cast.map(person => (
                    <Person key={person.id} person={person} />
                  ))
                  }
            </ul>
          </section>

          <section className='Similars container'>
            <MoviesWithBackground
              tabs={tabs}
              title='Te puede interesar'
              mediaType='tv'
              contentType='similar'
            />
          </section>
        </div>
      </main>
    </>
  )
}
