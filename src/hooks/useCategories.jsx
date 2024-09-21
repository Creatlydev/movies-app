import { useState, useEffect } from 'react'
import { getCategories } from '../services/categories'

export function useCategories (mediaType) {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const genres = await getCategories(mediaType)
        setCategories(genres)
      } catch (error) {
        console.error('Error in useCategories hook ', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  return { loading, categories }
}
