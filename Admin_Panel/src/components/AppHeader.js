import React from 'react'
import { CContainer, CHeaderBrand, CHeaderNav } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppHeaderDropdown } from './header/index'
import { logo } from 'src/assets/brand/logo'

const AppHeader = () => {
  return (
    <>
      <CHeaderBrand className="mx-auto d-md-none" to="/">
        <CIcon icon={logo} height={48} alt="Logo" />
      </CHeaderBrand>
      <CHeaderNav className="sidebar-user">
        <AppHeaderDropdown />
        <span>Admin</span>
      </CHeaderNav>
    </>
  )
}

export default AppHeader
