import emptyImage from '../assets/emptyState.png'
import './EmptyState.css'

export default function EmptyState ({ message = 'No hay nada que mostrar' }) {
  return (
    <div className='empty-state'>
      <img src={emptyImage} alt='No hay contenido' className='empty-image' />
      <p className='empty-message'>{message}</p>
    </div>
  )
}
