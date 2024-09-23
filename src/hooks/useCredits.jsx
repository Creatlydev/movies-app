import { useState, useEffect } from 'react'
import { getCreditsCast } from '../services/getCreditsCast'

export function useCredits ({ mediaType, id }) {
  const [cast, setCast] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const cast = await getCreditsCast(mediaType, id)
        setCast(cast)
      } catch (error) {
        console.error('Error in useCredits hook ', error)
      } finally {
        setLoading(false)
      }
    }

    fetchDetails()
  }, [])

  return { loading, cast }
}
