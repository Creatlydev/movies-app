import Movie from './Movie'
import './Movies.css'

function ScrollerMovies ({ movies, labelledby, ...props }) {
  return (
    <ul role='tabpanel' className='MoviesScroller' aria-labelledby={labelledby}>
      {
        movies.map(movie => (
          <Movie
            key={movie.id}
            movie={movie}
            {...props}
          />
        ))
        }
    </ul>
  )
}

export default function Movies ({ movies, ...props }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? <ScrollerMovies
          movies={movies}
          {...props}
        />
      : <p>Not results</p>

  )
}
