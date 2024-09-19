import FormSearh from '../components/FormSearch'
import Header from '../components/Header'
import Tab from '../components/Tab/Tab'
import './Home.css'

const trendTabs = [
  {
    label: 'Hoy',
    content: <div>Tendencias de Hoy</div>
  },
  {
    label: 'Esta semana',
    content: <div>Tendencias de esta semana</div>
  }
]

const popularTabs = [
  {
    label: 'Retransmision'
  },
  {
    label: 'En television'
  },
  {
    label: 'En alquiler'
  },
  {
    label: 'En cines'
  }
]

export default function Home () {
  return (
    <>
      <Header />
      <main>
        <section className='Hero container'>
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
            <header className='HeaderSection Trends-header'>
              <h2 className='HeaderSection-title'>Tendencias</h2>
              <Tab tabs={trendTabs} />
            </header>
          </div>
        </section>

        <section className='Popular'>
          <div className='container'>
            <header className='HeaderSection Popular-header'>
              <h2 className='HeaderSection-title'>Lo mas Popular</h2>
              <Tab tabs={popularTabs} />
            </header>
          </div>
        </section>
      </main>
    </>
  )
}
