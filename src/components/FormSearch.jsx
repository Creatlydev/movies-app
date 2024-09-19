/* eslint-disable react/prop-types */
import { MagniferLinear } from './Icons'
import './FormSearch.css'

export default function FormSearh ({ button: SearchButton }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Submit Form')
  }

  return (
    <form className='FormSearch container' onSubmit={handleSubmit}>
      <MagniferLinear className='Icon' style={{ width: 20, height: 20 }} />
      <input className='FormSearch-field' type='search' placeholder='Busca una pelicula, serie o persona' />
      {
        SearchButton && <SearchButton />
      }
    </form>
  )
}
