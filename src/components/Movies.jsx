function ListOfMovies ({ movies }) {
  console.log(movies)
  return (
    <ul className='Movies'>
      {
        movies.map(movie => (
          <li className='Movies-Movie' key={movie.id}>
            <a className='Movies-MovieLink' href={`/search/${movie.id}-${movie.title}`}>
              <img src={movie.poster} alt={movie.title} />
              <span>{Math.floor(movie.voteAverage * 100)}</span>
              <h3>{movie.title}</h3>
              <time dateTime={movie.releaseDate}>{movie.releaseDate}</time>
            </a>
          </li>
        ))
        }
    </ul>
  )
}

export default function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <h2>Nothing</h2>

  )
}
