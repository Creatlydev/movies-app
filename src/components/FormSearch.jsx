import { MagniferLinear } from './Icons'
import './FormSearch.css'
import { useSearch } from '../hooks/useSearch'

export default function FormSearh ({ button: SearchButton }) {
  const { search, updateSearch, error } = useSearch()
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Submit Form', event)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
  }

  return (
    <form className='FormSearch container' onSubmit={handleSubmit}>
      <MagniferLinear className='Icon' style={{ width: 20, height: 20 }} />
      <input
        className='FormSearch-field'
        type='search'
        placeholder='Busca una pelicula, serie o persona'
        onChange={handleChange}
      />
      {
        SearchButton && <SearchButton />
      }
    </form>
  )
}
