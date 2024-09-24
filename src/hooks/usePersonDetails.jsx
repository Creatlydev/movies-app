import { useState, useEffect, useCallback } from 'react'
import { getPersonDetails } from '../services/getPersonDetails'

export function usePersonDetails ({ id }) {
  const [personDetails, setPersonDetails] = useState('')
  const [loading, setLoading] = useState(true)

  const getPerson = useCallback(async (id) => {
    const details = await getPersonDetails(id)
    return details
  }, [])

  useEffect(() => {
    const fetchDetailsAndCredits = async () => {
      try {
        setLoading(true)
        const [detailsData] = await Promise.all([
          getPerson(id)
        ])

        setPersonDetails(detailsData)
      } catch (error) {
        console.error('Error fetching details of person:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchDetailsAndCredits()
  }, [id, getPerson])

  return { loading, personDetails }
}
