import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import './scss/style.scss'
import routes from './routes/routes'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const App = () => {
  const routesPath = useRoutes(routes)
  return (
    <div className="App">
      <Suspense fallback={loading}>{routesPath}</Suspense>
    </div>
  )
}
export default App
