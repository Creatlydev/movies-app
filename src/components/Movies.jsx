import Movie from './Movie'
import './Movies.css'

function ListOfMovies ({ movies, labelledby, mediaType, setHoverBgImage }) {
  return (
    <ul role='tabpanel' className='MoviesScroller' aria-labelledby={labelledby}>
      {
        movies.map(movie => (
          <Movie
            key={movie.id}
            movie={movie}
            mediaType={mediaType}
            setHoverBgImage={setHoverBgImage}
          />
        ))
        }
    </ul>
  )
}

export default function Movies ({ movies, labelledby, mediaType, setHoverBgImage }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? <ListOfMovies
          movies={movies}
          labelledby={labelledby}
          mediaType={mediaType}
          setHoverBgImage={setHoverBgImage}
        />
      : <p>Not results</p>

  )
}
