import { API_ENDPOINTS } from '../api/endPoints'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { StarBold } from '../components/Icons'
import { Link } from '../components/Link'
import MoviesWithBackground from '../components/Sections/MoviesWithBackground'
import { useDetails } from '../hooks/useDetails'
import { getIdFromQuery } from '../utils/getIdFromQuery'

import './MovieDetails.css'

function similarMovies (id) {
  const tabs = [
    {
      label: 'Recomendaciones',
      labelledby: 'Peliculas recomendadas para ti',
      endpoint: API_ENDPOINTS.MOVIE_RECOMMENDATIONS(id)
    },
    {
      label: 'Similares',
      labelledby: 'Peliculas similares',
      endpoint: API_ENDPOINTS.MOVIE_SIMILAR(id)
    }
  ]

  return tabs
}

export default function MovieDetails ({ routeParams }) {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  const query = routeParams.query
  const id = getIdFromQuery({ query, sep: '-' })
  const { loading, details, cast } = useDetails({ mediaType: 'movie', id })
  const year = details?.releaseDate?.split('-')[0]
  let runtime = details.hours ? `${details.hours}h ` : ''
  runtime += details.minutes ? `${details.minutes}m`.padStart(2, '0') : ''

  const tabs = similarMovies(id)

  if (loading) {
    return <p>Cargando detalles...</p>
  }

  return (
    <>
      <main>

        <Header />
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
                              to={`categories/${genre.id}-${genre.name}`}
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
                cast.map(person => (
                  <li key={person.id} className='Person'>
                    <Link to={`/person/${person.id}`}>
                      <img src={person.profile} alt={person.name} />
                    </Link>
                    <div className='PersonInfo'>
                      <Link
                        to={`/person/${person.id}`}
                        className='PersonInfo-link'
                      >
                        <h3 className='PersonInfo-name'>
                          {person.name}
                        </h3>
                      </Link>
                      <p className='PersonInfo-character'>
                        {person.character}
                      </p>
                    </div>
                  </li>
                ))
                  }
            </ul>
          </section>

          <section className='Similars container'>
            <MoviesWithBackground
              tabs={tabs}
              title='Te puede interesar'
              mediaType='movie'
              contentType='similar'
            />
          </section>
        </div>
      </main>

      <Footer />

    </>

  )
}
