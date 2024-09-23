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
    path: '/movie/now-playing',
    Component: () => <main>NOW PLAYING</main>
  },
  {
    path: '/search/:query',
    Component: ({ routeParams }) => <main>Resultados de {routeParams.query}</main>
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
    <div className='main-wrapper'>
      <Suspense fallback={null}>
        <Header />
        <div className='overlay' />
        <Router routes={routes} />
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
