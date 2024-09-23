import { lazy, Suspense } from 'react'

import { Router } from './components/Router'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home'
import './App.css'

const LazyMovieDetails = lazy(() => import('./Pages/MovieDetails'))
const LazySerieDetails = lazy(() => import('./Pages/SerieDetails'))

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
    Component: LazyMovieDetails
  },
  {
    path: '/tv/:query',
    Component: LazySerieDetails
  }
]

function App () {
  return (
    <Suspense fallback={null}>
      <Header />
      <div className='overlay' />
      <Router routes={routes} />
      <Footer />
    </Suspense>
  )
}

export default App
