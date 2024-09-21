// import { useEffect } from 'react'

import { API_ENDPOINTS } from '../../api/endPoints'
import { useCategories } from '../../hooks/useCategories'
import Tabs from '../Tabs/Tabs'

export default function MoviesByCategory () {
  const { loading, categories } = useCategories('movie')

  const moviesCategories = categories.map(category => ({
    label: category.name,
    labelledby: `Peliculas en la categoria ${category.name}`,
    endpoint: API_ENDPOINTS.DISCOVER_MOVIES_BY_CATEGORY(category.id)
  }))

  return (
    <section className='MoviesByCategorie'>
      <div className='container'>
        {
        loading
          ? <p>Cargando...</p>
          : <Tabs
              tabs={moviesCategories}
              title='Peliculas en la categoria'
              contentType='byCategory'
              mediaType='movie'
            />
      }
      </div>
    </section>
  )
}
