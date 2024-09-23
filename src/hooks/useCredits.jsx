import { useState, useEffect, useCallback } from 'react'
import { getCreditsCast } from '../services/getCreditsCast'

export function useCredits ({ mediaType, id }) {
  const [cast, setCast] = useState('')
  const [loading, setLoading] = useState(true)

  const getCredits = useCallback(async (mediaType, id) => {
    try {
      const cast = await getCreditsCast(mediaType, id)
      setCast(cast)
    } catch (error) {
      console.error('Error in useCredits hook ', error)
    } finally {
      setLoading(false)
    }
  })

  useEffect(() => {
    getCredits(mediaType, id)
  }, [])

  return { loading, cast, getCredits }
}
