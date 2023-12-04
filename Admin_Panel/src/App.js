import React from 'react'
import RoutesPath from '../src/routes/routes'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const App = () => {
  return (
    <React.Suspense fallback={loading}>
      <RoutesPath />
    </React.Suspense>
  )
}
export default App
