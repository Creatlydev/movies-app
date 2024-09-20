import { useState, useEffect, useRef } from 'react'

import './Tabs.css'
import TabsTrigger from './TabsTrigger'
import TabsList from './TabsList'
import { useMovies } from '../../hooks/useMovies'
import Movies from '../Movies'

export default function Tabs ({ tabs, title }) {
  const [activeTab, setActiveTab] = useState(0)
  const [styles, setStyles] = useState({})
  const tabRefs = useRef([])
  const { movies, getMovies, loading } = useMovies()

  const handleClick = (index, endpoint) => {
    setActiveTab(index)

    const setMoviesToActiveTab = async () => {
      await getMovies(endpoint)
    }

    setMoviesToActiveTab()
  }

  useEffect(() => {
    const fetchToFirstTab = async () => {
      await getMovies(tabs[0].endpoint)
    }

    fetchToFirstTab()
  }, [])

  useEffect(() => {
    const tabSelected = tabRefs.current[activeTab]

    if (tabSelected) {
      const { offsetWidth, offsetLeft } = tabSelected
      setStyles({ width: offsetWidth, left: offsetLeft })

      tabRefs.current[activeTab].scrollIntoView({
        block: 'nearest',
        inline: 'center',
        behavior: 'smooth'
      })
    }
  }, [activeTab])

  return (
    <div>
      <header className='TabHeader'>
        {title && <h2 className='TabHeader-title'>{title}</h2>}
        <TabsList style={styles}>
          {
        tabs.map(({ label, type, labelledby, endpoint }, index) => (
          <TabsTrigger
            key={index}
            isSelected={activeTab === index}
            onClick={() => handleClick(index, endpoint)}
            ref={(el) => (tabRefs.current[index] = el)}
            type={type}
            labelledby={labelledby}
          >
            {label}
          </TabsTrigger>
        ))
      }
        </TabsList>
      </header>

      <div className='TabContent'>
        {loading ? <p>Cargando...</p> : <Movies movies={movies} />}
      </div>
    </div>
  )
}
