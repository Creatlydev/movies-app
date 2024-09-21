import './Skeleton.css'

function MovieCard1 ({ delay }) {
  return (
    <div className='card' style={{ '--animation-delay': `${delay}s` }}>
      <div className='poster-placeholder' />
      <div className='title-placeholder' />
      <div className='year-placeholder' />
      <div className='circle-placeholder' />
    </div>
  )
}

export function SkeletonMovies1 () {
  const content = []
  const baseDelay = 0.1 // Cada tarjeta comenzará con un retraso de 0.1 segundos

  for (let i = 0; i < 20; i++) {
    const delay = baseDelay * i // Incrementar el delay progresivamente
    content.push(<MovieCard1 key={i} delay={delay} />)
  }

  return (
    <div className='Skeleton Movie-style1'>
      {content}
    </div>
  )
}
