import { useState, useEffect, useCallback } from 'react'
import { getDetails } from '../services/getDetails'
import { getCreditsCast } from '../services/getCreditsCast'

export function useDetails ({ mediaType, id }) {
  const [details, setDetails] = useState('')
  const [cast, setCast] = useState('')
  const [loading, setLoading] = useState(true)

  const getMovieDetails = useCallback(async (mediaType, id) => {
    const details = await getDetails(mediaType, id)
    return details
  }, [])

  const getCredits = useCallback(async (mediaType, id) => {
    const cast = await getCreditsCast(mediaType, id)
    return cast
  }, [])

  useEffect(() => {
    const fetchDetailsAndCredits = async () => {
      try {
        setLoading(true)
        const [detailsData, castData] = await Promise.all([
          getMovieDetails(mediaType, id),
          getCredits(mediaType, id)
        ])

        setDetails(detailsData)
        setCast(castData)
      } catch (error) {
        console.error('Error fetching details and credits:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchDetailsAndCredits()
  }, [mediaType, id, getMovieDetails, getCredits])

  return { loading, details, cast }
}
