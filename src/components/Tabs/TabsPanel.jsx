import { useState, useEffect } from 'react'
import { SkeletonMovies1 } from '../skeleton/SkeletonMovies'
import Movies from '../Movies'

export default function TabsPanel ({ movies, loading, sectionType, ...props }) {
  const [skeleton, setSkeleton] = useState('')

  useEffect(() => {
    let newSkeleton = null
    if (['trending', 'byType'].includes(sectionType)) {
      newSkeleton = <SkeletonMovies1 />
    } else {
      newSkeleton = <p>Cargando ...</p>
    }

    setSkeleton(newSkeleton)
  }, [])

  return (
    <div className='TabContent'>
      {
        loading
          ? skeleton
          : <Movies
              movies={movies}
              {...props}
            />
      }
    </div>
  )
}
