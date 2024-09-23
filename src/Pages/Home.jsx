import { API_ENDPOINTS } from '../api/endPoints'
import FormSearh from '../components/FormSearch'
import Header from '../components/Header'
import { useRandomMovieImage } from '../hooks/useRandomMovieImage'
import './Home.css'
import MoviesGeneric from '../components/Sections/MoviesGeneric'
import MoviesWithBackground from '../components/Sections/MoviesWithBackground'
import MoviesByCategory from '../components/Sections/MoviesByCategory'
import SeriesByCategory from '../components/Sections/SeriesByCategory'

const trendTabs = [
  {
    label: 'Hoy',
    labelledby: 'Tendencias de hoy',
    endpoint: API_ENDPOINTS.TREND_MOVIES('day')
  },
  {
    label: 'Esta semana',
    labelledby: 'Tendencias de esta semana',
    endpoint: API_ENDPOINTS.TREND_MOVIES('week')
  }
]

const tvByType = [
  {
    label: 'Miniseries',
    labelledby: 'Miniseries',
    endpoint: API_ENDPOINTS.DISCOVER_TV_BY_TYPE(2)
  },
  {
    label: 'Guiones',
    labelledby: 'Programas guionados',
    endpoint: API_ENDPOINTS.DISCOVER_TV_BY_TYPE(4)
  },
  {
    label: 'Entrevistas',
    labelledby: 'Programas de entrevistas variadas',
    endpoint: API_ENDPOINTS.DISCOVER_TV_BY_TYPE(5)
  },
  {
    label: 'Noticias',
    labelledby: 'Programas de noticias',
    endpoint: API_ENDPOINTS.DISCOVER_TV_BY_TYPE(1)
  },
  {
    label: 'Documentales',
    labelledby: 'Documentales informativos',
    endpoint: API_ENDPOINTS.DISCOVER_TV_BY_TYPE(0)
  }
]

const tvByStatus = [
  {
    label: 'Retransmision',
    labelledby: 'Series en retransmision',
    endpoint: API_ENDPOINTS.DISCOVER_TV_BY_STATUS(0)
  },
  {
    label: 'Planeacion',
    labelledby: 'Series en planeacion',
    endpoint: API_ENDPOINTS.DISCOVER_TV_BY_STATUS(1)
  },
  {
    label: 'Produccion',
    labelledby: 'Series actualmente en produccion',
    endpoint: API_ENDPOINTS.DISCOVER_TV_BY_STATUS(2)
  },
  {
    label: 'Finalizacion',
    labelledby: 'Series finalizadas',
    endpoint: API_ENDPOINTS.DISCOVER_TV_BY_STATUS(3)
  },
  {
    label: 'Pruebas',
    labelledby: 'Pilotos de series de TV',
    endpoint: API_ENDPOINTS.DISCOVER_TV_BY_STATUS(5)
  }
]

const toKids = [
  {
    label: 'Animacion',
    labelledby: 'Peliculas para los mas pequeños del hogar',
    endpoint: API_ENDPOINTS.DISCOVER_MOVIES_BY_CATEGORY(16)
  }
]

export default function Home () {
  const backgroundImage = useRandomMovieImage()

  return (
    <>
      <Header />
      <main>
        <section
          className='Hero  container' style={{
            backgroundImage: `url(${backgroundImage})`
          }}
        >
          <h1 className='Hero-title'>
            Te damos la Bienvenida.
            <span>
              Millones de peliculas, series y gente por descubrir. Explora ya.
            </span>
          </h1>
          <div className='Hero-SearchBar'>
            <FormSearh button={() => <button>Buscar</button>} />
          </div>
        </section>

        <MoviesGeneric
          tabs={trendTabs}
          title='Tendencias'
          mediaType='movie'
          contentType='trending'
        />

        <MoviesWithBackground
          tabs={tvByStatus}
          title='Series TV en'
          mediaType='tv'
          contentType='byStatus'
        />

        <MoviesGeneric
          tabs={tvByType}
          title='Contenido variado'
          mediaType='tv'
          contentType='byType'
        />

        <MoviesByCategory />

        <MoviesWithBackground
          tabs={toKids}
          title='Para los mas pequeños'
          mediaType='movie'
          contentType='toKids'
        />

        <SeriesByCategory />

      </main>
    </>
  )
}
