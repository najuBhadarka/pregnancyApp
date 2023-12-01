import React, { Suspense } from 'react'
import { AppSidebar, AppFooter, AppHeader } from '../components/index'
import { Navigate, Outlet } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

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
            <AppHeader />
            <div className="body flex-grow-1 px-3">
              <CContainer lg>
                <Suspense fallback={<CSpinner color="primary" />}>
                  <Outlet />
                </Suspense>
              </CContainer>
            </div>
            <AppFooter />
          </div>
        </div>
      )}
    </>
  )
}

export default MainLayout
