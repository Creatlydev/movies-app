import { useState } from 'react'

import { API_ENDPOINTS } from '../api/endPoints'
import FormSearh from '../components/FormSearch'
import Header from '../components/Header'
import Tabs from '../components/Tabs/Tabs'
import { useRandomMovieImage } from '../hooks/useRandomMovieImage'
import './Home.css'

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

const typeContent = [
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

export default function Home () {
  const backgroundImage = useRandomMovieImage()
  const [hoverBgImage, setHoverBgImage] = useState('')

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
              mediaType='movie'
            />
          </div>
        </section>

        <section
          className='MoviesByStatus'
          style={{
            '--bg-image': `url(${hoverBgImage})`
          }}
        >
          <div className='container'>
            <Tabs
              tabs={tvByStatus}
              title='Series TV en'
              mediaType='tv'
              setHoverBgImage={setHoverBgImage}
            />
          </div>
        </section>

        <section className='MoviesByType'>
          <div className='container'>
            <Tabs
              tabs={typeContent}
              title='Contenido variado'
              mediaType='tv'
            />
          </div>
        </section>

      </main>
    </>
  )
}
