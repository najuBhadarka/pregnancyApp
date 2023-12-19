import { CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/',
    // icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },
  // {
  //   component: CNavTitle,
  //   name: 'User',
  // },
  {
    component: CNavItem,
    name: 'Users List',
    to: '/user/user-list',
    // icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavTitle,
  //   name: 'Question',
  // },
  {
    component: CNavItem,
    name: 'Questions List',
    to: '/question/questions-list',
    // icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Result List',
    to: '/question/result-list',
    // icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
  },
]

export default _nav
