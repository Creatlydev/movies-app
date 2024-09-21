import { API_ENDPOINTS } from '../../api/endPoints'
import { useCategories } from '../../hooks/useCategories'
import Tabs from '../Tabs/Tabs'

export default function SeriesByCategory () {
  const { loading, categories } = useCategories('tv')

  const seriesCategories = categories.map(category => ({
    label: category.name,
    labelledby: `Peliculas en la categoria ${category.name}`,
    endpoint: API_ENDPOINTS.DISCOVER_SERIES_BY_CATEGORY(category.id)
  }))

  return (
    <section className='SeriesByCategory'>
      <div className='container'>
        {
        loading
          ? null
          : <Tabs
              tabs={seriesCategories}
              title='Series en la categoria'
              contentType='byCategory'
              mediaType='tv'
            />
      }
      </div>
    </section>
  )
}
