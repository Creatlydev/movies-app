import { Router } from './components/Router'
import Home from './Pages/Home'
import './App.css'

const routes = [
  {
    path: '/',
    Component: Home
  },
  {
    path: '/search/:query',
    Component: ({ routeParams }) => <h2>Resultados de {routeParams.query}</h2>
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
