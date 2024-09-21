import { useState, useEffect } from 'react'
import { getDetails } from '../services/getDetails'

export function useDetails ({ mediaType, id }) {
  const [details, setDetails] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await getDetails(mediaType, id)
        setDetails(details)
      } catch (error) {
        console.error('Error in useDetails hook ', error)
      } finally {
        setLoading(false)
      }
    }

    fetchDetails()
  }, [])

  return { loading, details }
}
