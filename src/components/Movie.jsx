import { useEffect } from 'react'

import { StarBold } from './Icons'
import { Link } from './Link'

export default function Movie ({ movie, mediaType, setHoverBgImage }) {
  const onHoverChangeImage = () => {
    if (!setHoverBgImage) return
    setHoverBgImage(`${movie.backdropPath}`)
  }

  useEffect(() => {
    if (!setHoverBgImage) return
    setHoverBgImage(`${movie.backdropPath}`)
  }, [])

  return (
    <li
      className='MoviesScroller-Movie'
      title={movie.title}
    >
      <div className='MoviesScroller-MovieImg'>
        <Link
          data-media-type={mediaType}
          className='MoviesScroller-MovieLink img'
          to={`/${mediaType}/${movie.id}-${movie.title}`}
          onMouseEnter={() => onHoverChangeImage()}
        >
          <img src={movie.poster} alt={movie.title} />
        </Link>
      </div>

      <div className='MoviesScroller-MovieInfo'>
        <div className='MoviesScroller-userScore'>
          {parseFloat(movie.voteAverage).toFixed(1)}
          <StarBold
            className='icon' style={{
              width: '16'
            }}
          />
        </div>

        <Link data-media-type={mediaType} className='MoviesScroller-MovieLink title' to={`/${mediaType}/${movie.id}-${movie.title}`}>
          <h3>{movie.title}</h3>
        </Link>

        <time className='MoviesScroller-MovieReleaseDate' dateTime={movie.releaseDate}>{movie.releaseDate}</time>
      </div>
    </li>
  )
}
