import Movie from './Movie'
import './Movies.css'

function ListOfMovies ({ movies, labelledby, mediaType }) {
  return (
    <ul role='tabpanel' className='MoviesScroller' aria-labelledby={labelledby}>
      {
        movies.map(movie => (
          <Movie
            key={movie.id}
            movie={movie}
            mediaType={mediaType}
          />
        ))
        }
    </ul>
  )
}

export default function Movies ({ movies, labelledby, mediaType }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? <ListOfMovies movies={movies} labelledby={labelledby} mediaType={mediaType} />
      : <p>Not results</p>

  )
}
