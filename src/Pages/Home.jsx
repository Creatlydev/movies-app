import { API_ENDPOINTS } from '../api/endPoints'
import FormSearh from '../components/FormSearch'
import Header from '../components/Header'
import Tabs from '../components/Tabs/Tabs'
import { useRandomMovieImage } from '../hooks/useRandomMovieImage'
import './Home.css'

const trendTabs = [
  {
    label: 'Hoy',
    content: <div>Tendencias de hoy</div>,
    type: 'trending',
    labelledby: 'Tendencias de hoy',
    endpoint: API_ENDPOINTS.TREND_MOVIES('day')
  },
  {
    label: 'Esta semana',
    content: <div>Tendencias de esta semana</div>,
    type: 'trending',
    labelledby: 'Tendencias de esta semana',
    endpoint: API_ENDPOINTS.TREND_MOVIES('week')
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

        <section className='Trends'>
          <div className='container'>
            <Tabs
              tabs={trendTabs}
              title='Tendencias'
            />
          </div>
        </section>

      </main>
    </>
  )
}
