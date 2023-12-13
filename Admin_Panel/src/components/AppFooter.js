import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <div className="d-flex justify-content-center">
      <CFooter>
        <span className="ms-1 text-center">&copy; Copyright@2023-2024 Indaco</span>
      </CFooter>
    </div>
  )
}

export default React.memo(AppFooter)
