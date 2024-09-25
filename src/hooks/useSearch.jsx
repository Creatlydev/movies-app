import { useState, useEffect, useRef } from 'react'

export function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = false
      return
    }

    const newSearch = search.trim()

    if (newSearch === '') {
      setError('No se puede buscar una pelicula vacia')
      return
    }

    if (newSearch.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con un numero')
      return
    }

    if (newSearch.length < 3) {
      setError('La busqueda debe de tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error, setError }
}
