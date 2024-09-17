import './Header.css'
import { MagniferLinear } from './Icons'
import Navbar from './Navbar'

export default function Header () {
  return (
    <header className='HeaderMain'>
      <div className='container'>
        <div className='Logo'>
          <img src='/src/assets/logo.svg' alt='Logo de the movie db' />
        </div>

        <Navbar />

        <button>
          <MagniferLinear />
        </button>
      </div>
    </header>
  )
}
