import { MagniferLinear } from './Icons'
import './FormSearch.css'

export default function FormSearh () {
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Submit Form')
  }

  return (
    <form className='FormSearch container' onSubmit={handleSubmit}>
      <MagniferLinear style={{ width: 20, height: 20 }} />
      <input className='FormSearch-field' type='search' placeholder='Busca una pelicula, serie o persona' />
    </form>
  )
}
