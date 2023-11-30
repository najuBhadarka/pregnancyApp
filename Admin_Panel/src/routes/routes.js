import React from 'react'
import QuestionsList from 'src/views/pages/Question/QuestionList.js'

const Dashboard = React.lazy(() => import('../views/dashboard/Dashboard.js'))
const MainLayout = React.lazy(() => import('../layout/MainLayout.js'))
const AuthLayout = React.lazy(() => import('../layout/AuthLayout.js'))
const Login = React.lazy(() => import('../views/pages/login/Login.js'))
const UserList = React.lazy(() => import('../views/pages/user/userList.js'))
const QuestionForm = React.lazy(() => import('../views/pages/Question/QuestionForm.js'))
const UserControl = React.lazy(() => import('../views/pages/user/userAdd.js'))

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/user/user-list',
        element: <UserList />,
      },
      ,
      {
        path: '/user/update/:id',
        element: <UserControl mode={'Update'}/>,
      },
      {
        path: '/question/create-form',
        element: <QuestionForm />,
      },
      {
        path: '/question/questions-list',
        element: <QuestionsList />,
      },
    ],
  },
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'sign-in',
        element: <Login />,
      },
    ],
  },
]

export default routes
