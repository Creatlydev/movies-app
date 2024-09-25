import { Link } from './Link'

export default function Person ({ person }) {
  return (
    <li className='Person'>
      <Link to={`/${person.mediaType || 'person'}/${person.id}-${encodeURIComponent(person.name)}`}>
        <img src={person.profile} alt={person.name} />
      </Link>
      <div className='PersonInfo'>
        <Link
          to={`/person/${person.id}-${encodeURIComponent(person.name)}`}
          className='PersonInfo-link'
        >
          <h3 className='PersonInfo-name'>
            {person.name}
          </h3>
        </Link>
        <p className='PersonInfo-character'>
          {person.character || ''}
        </p>
      </div>
    </li>
  )
}
