import { lazy, Suspense } from 'react'

import { Router } from './components/Router'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home'
import './App.css'

const LazyMovieDetails = lazy(() => import('./Pages/MovieDetails'))
const LazySerieDetails = lazy(() => import('./Pages/SerieDetails'))
const LazyPersonDetails = lazy(() => import('./Pages/PersonDetails'))
const LazyUpcomingMovies = lazy(() => import('./Pages/UpcomingMoviesPage'))
const LazyTopRatedMovies = lazy(() => import('./Pages/TopRatedMovies'))
const LazyNowPlaying = lazy(() => import('./Pages/NowPlayingMovies'))
const LazyPopularMovies = lazy(() => import('./Pages/PopularMovies'))

const LazyAiringTodaySeries = lazy(() => import('./Pages/AiringTodaySeries'))
const LazyOnTheAirSeries = lazy(() => import('./Pages/OnTheAirSeries'))
const LazyTopRatedSeries = lazy(() => import('./Pages/TopRatedSeries'))
const LazyPopularSeries = lazy(() => import('./Pages/TopRatedSeries'))
const LazyCategoryMovies = lazy(() => import('./Pages/CategoryMovies'))
const LazyCategorySeries = lazy(() => import('./Pages/CategorySeries'))

const routes = [
  {
    path: '/',
    Component: Home
  },
  {
    path: '/movie/popular',
    Component: LazyPopularMovies
  },
  {
    path: '/movie/now-playing',
    Component: LazyNowPlaying
  },
  {
    path: '/movie/upcoming',
    Component: LazyUpcomingMovies
  },
  {
    path: '/movie/top-rated',
    Component: LazyTopRatedMovies
  },
  {
    path: '/tv/airing-today',
    Component: LazyAiringTodaySeries
  },
  {
    path: '/tv/on-the-air',
    Component: LazyOnTheAirSeries
  },
  {
    path: '/tv/top-rated',
    Component: LazyTopRatedSeries
  },
  {
    path: '/tv/popular',
    Component: LazyPopularSeries
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
  },
  {
    path: '/person/:query',
    Component: LazyPersonDetails
  },
  {
    path: '/movie/category/:query',
    Component: LazyCategoryMovies
  },
  {
    path: '/tv/category/:query',
    Component: LazyCategorySeries
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
