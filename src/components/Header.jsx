import { useState } from 'react'

import { CloseCircleOutline, HamburgerMenuLinear, MagniferLinear } from './Icons'
import Navbar from './Navbar'
import FormSearh from './FormSearch'
import { useHeaderVisibility } from '../hooks/useHeaderVisibility'
import './Header.css'
import { Link } from './Link'

export default function Header () {
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const { isHeaderHidden } = useHeaderVisibility()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={`HeaderMain ${isHeaderHidden ? 'Nav-up' : 'Nav-down'}`}>
      <div className='container'>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='ButtonMenu'>
          <HamburgerMenuLinear
            style={{
              flexShrink: 0,
              width: 32,
              height: 32
            }}
          />

        </button>
        <Link to='/' className='Logo'>
          <img src='/src/assets/logo.svg' alt='Logo de the movie db' />
        </Link>

        <Navbar open={isMenuOpen} />

        <button onClick={() => setIsSearchVisible(!isSearchVisible)}>
          {
            isSearchVisible
              ? <CloseCircleOutline />
              : <MagniferLinear />
          }
        </button>
      </div>

      <div className={`SearchBar ${isSearchVisible ? 'is-visible' : 'is-hidden'}`}>
        <FormSearh />
      </div>
    </header>
  )
}
