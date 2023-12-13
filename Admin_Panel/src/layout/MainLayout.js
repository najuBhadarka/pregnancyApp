import React, { Suspense } from 'react'
import { AppSidebar, AppFooter } from '../components/index'
import { Navigate, Outlet } from 'react-router-dom'
import { CSpinner } from '@coreui/react'

const MainLayout = () => {
  const token = localStorage.getItem('token')
  return (
    <>
      {!token ? (
        <Navigate to={'/auth/signIn'} />
      ) : (
        <div>
          <AppSidebar />
          <div className="wrapper d-flex flex-column min-vh-100 bg-light">
            <div className="body flex-grow-1 px-3">
              <Suspense fallback={<CSpinner color="primary" />}>
                <Outlet />
              </Suspense>
            </div>
            <AppFooter />
          </div>
        </div>
      )}
    </>
  )
}

export default MainLayout
