import FormSearh from '../components/FormSearch'
import Header from '../components/Header'
import Tab from '../components/Tab/Tab'
import { useRandomMovieImage } from '../hooks/useRandomMovieImage'
import './Home.css'

const trendTabs = [
  {
    label: 'Hoy',
    content: <div>Tendencias de Hoy</div>,
    type: 'trending'
  },
  {
    label: 'Esta semana',
    content: <div>Tendencias de esta semana</div>,
    type: 'trending'
  }
]

export default function Home () {
  const backgroundImage = useRandomMovieImage()

  return (
    <>
      <Header />
      <main>
        <section
          className='Hero container' style={{
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
            <Tab
              tabs={trendTabs}
              title='Tendencias'
            />
          </div>
        </section>

      </main>
    </>
  )
}
