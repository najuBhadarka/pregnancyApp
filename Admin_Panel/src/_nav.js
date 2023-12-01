import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilAddressBook, cilSpeedometer, cilUser } from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/indaco/admin',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },
  {
    component: CNavTitle,
    name: 'User',
  },
  {
    component: CNavItem,
    name: 'Users List',
    to: '/indaco/admin/user/user-list',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Question',
  },
  {
    component: CNavItem,
    name: 'Questions Form',
    to: '/indaco/admin/question/create-form',
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Questions List',
    to: '/indaco/admin/question/questions-list',
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
  },
]

export default _nav
