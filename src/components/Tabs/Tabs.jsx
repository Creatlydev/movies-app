import { useState, useEffect, useRef } from 'react'

import './Tabs.css'
import TabsTrigger from './TabsTrigger'
import TabsList from './TabsList'
import { useMovies } from '../../hooks/useMovies'
import TabsPanel from './TabsPanel'

export default function Tabs ({ tabs, title, contentType, mediaType, ...props }) {
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
    }

    tabSelected.scrollIntoView({
      block: 'nearest',
      inline: 'center',
      behavior: 'smooth'
    })
  }, [activeTab])

  return (
    <div>
      <header className='TabHeader'>
        {title && <h2 className='TabHeader-title'>{title}</h2>}
        <TabsList style={styles}>
          {
        tabs.map(({ label, endpoint }, index) => (
          <TabsTrigger
            key={index}
            isSelected={activeTab === index}
            onClick={() => handleClick(index, endpoint)}
            ref={(el) => (tabRefs.current[index] = el)}
          >
            {label}
          </TabsTrigger>
        ))
      }
        </TabsList>
      </header>

      <TabsPanel
        movies={movies}
        loading={loading}
        sectionType={contentType}
        mediaType={mediaType}
        labelledby={tabs[activeTab].labelledby}
        {...props}
      />
    </div>
  )
}
