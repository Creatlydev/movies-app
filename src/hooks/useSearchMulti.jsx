import { useState, useEffect, useCallback } from 'react'
import { searchMulti } from '../services/searchMulti'

export function useSearchMulti ({ query }) {
  const [loading, setLoading] = useState(true)
  const [result, setResult] = useState([])

  const getMultiSearch = useCallback(async (query) => {
    const newResult = await searchMulti(query)
    return newResult
  }, [])

  useEffect(() => {
    const fetchMultiSearch = async () => {
      try {
        setLoading(true)
        const search = await getMultiSearch(query)
        setResult(search)
      } catch (error) {
        console.error('Error in search multi ', error)
      } finally {
        setLoading(false)
      }
    }

    fetchMultiSearch()
  }, [query])

  return { loading, result }
}
