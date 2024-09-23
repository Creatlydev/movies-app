import EmptyState from './EmptyState'
import Movie from './Movie'
import './Movies.css'

function ScrollerMovies ({ movies, labelledby, mediaType, ...props }) {
  return (
    <ul role='tabpanel' className='MoviesScroller' aria-labelledby={labelledby}>
      {
        movies.map(movie => (
          <Movie
            key={movie.id}
            movie={movie}
            mediaType={mediaType}
            {...props}
          />
        ))
        }
    </ul>
  )
}

export default function Movies ({ movies, mediaType, ...props }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? <ScrollerMovies
          movies={movies}
          mediaType={mediaType}
          {...props}
        />
      : <EmptyState />

  )
}
