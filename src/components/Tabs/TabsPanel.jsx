import { useState, useEffect } from 'react'
import { SkeletonSectionGeneric } from '../skeleton/SkeletonSectionGeneric'
import Movies from '../Movies'
import { SkeletonSectionWithBackground } from '../skeleton/SkeletonSectionWithBackground'

export default function TabsPanel ({ movies, loading, mediaType, sectionType, ...props }) {
  const [skeleton, setSkeleton] = useState('')

  useEffect(() => {
    let newSkeleton = null
    if (['trending', 'byType', 'byCategory', 'similar']
      .includes(sectionType)) {
      newSkeleton = <SkeletonSectionGeneric />
    } else {
      newSkeleton = <SkeletonSectionWithBackground />
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
              mediaType={mediaType}
              {...props}
            />
      }
    </div>
  )
}
