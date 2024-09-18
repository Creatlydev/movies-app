import { useState, useEffect } from 'react'

import './Header.css'
import { CloseCircleOutline, MagniferLinear } from './Icons'
import Navbar from './Navbar'

export default function Header () {
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const [navUp, setNavUp] = useState(false)

  useEffect(() => {
    let lastScrollTop = 0
    const toogleHeaderVisbility = () => {
      const currentScrollTop = window.scrollY || document.documentElement.scrollTop

      if (currentScrollTop > lastScrollTop) {
        currentScrollTop > 72 && setNavUp(true)
      } else {
        setNavUp(false)
      }
      lastScrollTop = currentScrollTop
    }

    window.addEventListener('scroll', toogleHeaderVisbility)

    return () => {
      window.removeEventListener('scroll', toogleHeaderVisbility)
    }
  }, [])

  return (
    <header className={`HeaderMain ${navUp ? 'Nav-up' : 'Nav-down'}`}>
      <div className='container'>
        <div className='Logo'>
          <img src='/src/assets/logo.svg' alt='Logo de the movie db' />
        </div>

        <Navbar />

        <button onClick={() => setIsSearchVisible(!isSearchVisible)}>
          {
            isSearchVisible
              ? <CloseCircleOutline />
              : <MagniferLinear />
          }
        </button>
      </div>

      <div className={`SearchBar ${isSearchVisible ? 'is-visible' : 'is-hidden'}`}>
        <form className='SearchBar-form container'>
          <MagniferLinear style={{ width: '20px', height: '16px' }} />
          <input className='field' type='search' placeholder='Busca una pelicula, serie o persona' />
        </form>
      </div>
    </header>
  )
}
