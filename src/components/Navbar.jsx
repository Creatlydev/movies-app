import NavigationMenuDropdown from './NavigationMenu/NavigationMenuDropdown'
import NavigationMenuItem from './NavigationMenu/NavigationMenuItem'
import NavigationMenuTrigger from './NavigationMenu/NavigationMenuTrigger'

import './Navbar.css'

export default function Navbar () {
  return (
    <nav className='Navbar'>
      <NavigationMenuItem>
        <NavigationMenuTrigger>
          Peliculas
        </NavigationMenuTrigger>
        <NavigationMenuDropdown>
          <ul className='NavbarMenu' role='menu'>
            <li>
              <a className='NavbarMenu-item' href='/movie' role='menuitem'>Popular</a>
            </li>
            <li>
              <a className='NavbarMenu-item' href='/movie/now-playing' role='menuitem'>En Cartelera</a>
            </li>
            <li>
              <a className='NavbarMenu-item' href='/movie/upcoming' role='menuitem'>Proximamente</a>
            </li>
            <li>
              <a className='NavbarMenu-item' href='/movie/top-rated' role='menuitem'>Mejor puntuadas</a>
            </li>
          </ul>
        </NavigationMenuDropdown>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>
          Popular
        </NavigationMenuTrigger>
        <NavigationMenuDropdown>
          <ul className='NavbarMenu' role='menu'>
            <li>
              <a className='NavbarMenu-item' href='/tv' role='menuitem'>Popular</a>
            </li>
            <li>
              <a className='NavbarMenu-item' href='/tv/...' role='menuitem'>Se emiten hoy</a>
            </li>
            <li>
              <a className='NavbarMenu-item' href='/tv/...' role='menuitem'>En television</a>
            </li>
            <li>
              <a className='NavbarMenu-item' href='/tv/top-rated' role='menuitem'>Mejor valoradas</a>
            </li>
          </ul>
        </NavigationMenuDropdown>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>
          Gente
        </NavigationMenuTrigger>
        <NavigationMenuDropdown>
          <ul className='NavbarMenu' role='menu'>
            <li>
              <a className='NavbarMenu-item' href='/person' role='menuitem'>Popular</a>
            </li>
          </ul>
        </NavigationMenuDropdown>
      </NavigationMenuItem>
    </nav>
  )
}
