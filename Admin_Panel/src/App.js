import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import RoutesPath from '../src/routes/routes'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const App = () => {
  return (
    <Router basename="/indaco/admin">
      <RoutesPath />
    </Router>
  )
}
export default App
