import { useState, useEffect, useCallback } from 'react'
import { getPersonDetails } from '../services/getPersonDetails'
import { getPersonMovieCredits } from '../services/getPersonMovieCredits'

export function usePersonDetails ({ id }) {
  const [personDetails, setPersonDetails] = useState('')
  const [personMovieCredits, setPersonMovieCredits] = useState('')
  const [loading, setLoading] = useState(true)

  const getPerson = useCallback(async (id) => {
    const details = await getPersonDetails(id)
    return details
  }, [])

  const getMovieCredits = useCallback(async (id) => {
    const movieCredits = await getPersonMovieCredits(id)
    return movieCredits
  })

  useEffect(() => {
    const fetchDetailsAndCredits = async () => {
      try {
        setLoading(true)
        const [detailsData, movieCredits] = await Promise.all([
          getPerson(id),
          getMovieCredits(id)
        ])

        setPersonDetails(detailsData)
        setPersonMovieCredits(movieCredits)
      } catch (error) {
        console.error('Error fetching details of person:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchDetailsAndCredits()
  }, [id, getPerson])

  return { loading, personDetails, personMovieCredits }
}
