/* eslint-disable react/prop-types */
// import { useState } from 'react'

import { Router } from './components/Router'
import Home from './Pages/Home'

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
      <Router routes={routes} />
    </>
  )
}

export default App
