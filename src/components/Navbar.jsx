import NavigationMenuDropdown from './NavigationMenu/NavigationMenuDropdown'
import NavigationMenuItem from './NavigationMenu/NavigationMenuItem'
import NavigationMenuTrigger from './NavigationMenu/NavigationMenuTrigger'

import './Navbar.css'
import { Link } from './Link'

export default function Navbar ({ open }) {
  return (
    <nav className={`Navbar ${open ? 'is-open' : ''}`}>
      <NavigationMenuItem>
        <NavigationMenuTrigger>
          Peliculas
        </NavigationMenuTrigger>
        <NavigationMenuDropdown>
          <ul className='NavbarMenu' role='menu'>
            <li>
              <Link className='NavbarMenu-item' to='/movie/popular' role='menuitem'>Popular</Link>
            </li>
            <li>
              <Link className='NavbarMenu-item' to='/movie/now-playing' role='menuitem'>En Cartelera</Link>
            </li>
            <li>
              <Link className='NavbarMenu-item' to='/movie/upcoming' role='menuitem'>Proximamente</Link>
            </li>
            <li>
              <Link className='NavbarMenu-item' to='/movie/top-rated' role='menuitem'>Mejor puntuadas</Link>
            </li>
          </ul>
        </NavigationMenuDropdown>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>
          Series
        </NavigationMenuTrigger>
        <NavigationMenuDropdown>
          <ul className='NavbarMenu' role='menu'>
            <li>
              <Link className='NavbarMenu-item' to='/tv/popular' role='menuitem'>Popular</Link>
            </li>
            <li>
              <Link className='NavbarMenu-item' to='/tv/airing-today' role='menuitem'>Se emiten hoy</Link>
            </li>
            <li>
              <Link className='NavbarMenu-item' to='/tv/on-the-air' role='menuitem'>En television</Link>
            </li>
            <li>
              <Link className='NavbarMenu-item' to='/tv/top-rated' role='menuitem'>Mejor valoradas</Link>
            </li>
          </ul>
        </NavigationMenuDropdown>
      </NavigationMenuItem>
    </nav>
  )
}
