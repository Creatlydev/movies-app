import { useRef } from 'react'

import { MagniferLinear } from './Icons'
import './FormSearch.css'
import { useSearch } from '../hooks/useSearch'
import { navigate } from '../utils/navigate'

export default function FormSearh ({ button: SearchButton, setIsSearchVisible }) {
  const { search, updateSearch, error } = useSearch()
  const inputRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (error) return
    navigate(`/search/${search}`)
    inputRef.current.value = ''
    setIsSearchVisible && setIsSearchVisible(false)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
  }

  return (
    <form
      className={`FormSearch container ${error ? 'has-error' : ''}`}
      onSubmit={handleSubmit}
    >
      <MagniferLinear className='Icon' style={{ width: 20, height: 20 }} />
      <input
        ref={inputRef}
        className='FormSearch-field'
        type='search'
        placeholder='Busca una pelicula, serie o persona'
        onChange={handleChange}
      />
      {
        SearchButton && <SearchButton />
      }
      {
        error &&
          <div className='FormSearh-Error'>
            {error}
          </div>
      }
    </form>
  )
}
