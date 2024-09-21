import './Skeleton.css'

function CardGeneric ({ delay }) {
  return (
    <div className='card' style={{ '--animation-delay': `${delay}s` }}>
      <div className='poster-placeholder' />
      <div className='title-placeholder' />
      <div className='year-placeholder' />
      <div className='circle-placeholder' />
    </div>
  )
}

export function SkeletonSectionGeneric () {
  const content = []
  const baseDelay = 0.1 // Cada tarjeta comenzará con un retraso de 0.1 segundos

  for (let i = 0; i < 20; i++) {
    const delay = baseDelay * i // Incrementar el delay progresivamente
    content.push(<CardGeneric key={i} delay={delay} />)
  }

  return (
    <div className='Skeleton Movie-style1'>
      {content}
    </div>
  )
}
