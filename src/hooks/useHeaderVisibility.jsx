import { useEffect, useState } from 'react'

export function useHeaderVisibility (threshold = 100) {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false)

  useEffect(() => {
    let lastScrollTop = 0
    let accumulatedScroll = 0

    const handleScroll = () => {
      const currentScrollTop = window.scrollY || document.documentElement.scrollTop
      const deltaScroll = currentScrollTop - lastScrollTop
      accumulatedScroll += Math.abs(deltaScroll)

      if (accumulatedScroll > threshold) {
        setIsHeaderHidden(currentScrollTop > lastScrollTop && currentScrollTop > 72)
        accumulatedScroll = 0
      }

      lastScrollTop = currentScrollTop
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [threshold])

  return { isHeaderHidden }
}
