import { StarBold } from './Icons'
import { Link } from './Link'

export default function Movie ({ movie, mediaType }) {
  return (
    <li className='MoviesScroller-Movie' title={movie.title}>
      <div className='MoviesScroller-MovieImg'>
        <Link data-media-type={mediaType} className='MoviesScroller-MovieLink img' to={`/${mediaType}/${movie.id}-${movie.title}`}>
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
