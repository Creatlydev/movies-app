import './NotFound.css'
import NotFoundImage from '../assets/404.svg'
import { Link } from '../components/Link'

const NotFound = () => {
  return (
    <main className='not-found-container container'>
      <img src={NotFoundImage} alt='404 Not Found' className='not-found-image' />
      <h1 className='not-found-title'>Oops! Página no encontrada</h1>
      <p className='not-found-text'>
        Parece que la página que buscas no existe o ha sido movida.
      </p>
      <Link to='/' className='home-link'>
        Regresame a casa
      </Link>
    </main>
  )
}

export default NotFound
