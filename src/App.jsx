import { Router } from './components/Router'
import Home from './Pages/Home'
import './App.css'
import MovieDetails from './Pages/MovieDetails'
import SerieDetails from './Pages/SerieDetails'

const routes = [
  {
    path: '/',
    Component: Home
  },
  {
    path: '/search/:query',
    Component: ({ routeParams }) => <h2>Resultados de {routeParams.query}</h2>
  },
  {
    path: '/movie/:query',
    Component: MovieDetails
  },
  {
    path: '/tv/:query',
    Component: SerieDetails
  }
]

function App () {
  return (
    <>
      <div className='overlay' />
      <Router routes={routes} />
    </>
  )
}

export default App
