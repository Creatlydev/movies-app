import Movie from './Movie'
import './Grid.css'
import './Movies.css'

export default function Grid ({ data, mediaType }) {
  return (
    <section className='Grid'>
      {
        data.map(movie => (
          <Movie
            key={movie.id}
            movie={movie}
            mediaType={mediaType}
          />
        ))
      }
    </section>
  )
}
