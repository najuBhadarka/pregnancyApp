import React from 'react'

const Dashboard = React.lazy(() => import('../views/dashboard/Dashboard.js'))
const MainLayout = React.lazy(() => import('../layout/MainLayout.js'))
const AuthLayout = React.lazy(() => import('../layout/AuthLayout.js'))
const Login = React.lazy(() => import('../views/pages/login/Login.js'))
const UserList = React.lazy(() => import('../views/pages/user/userList.js'))
const QuestionForm = React.lazy(() => import('../views/pages/Question/QuestionForm.js'))

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
      {
        path: '/question/create-form',
        element: <QuestionForm />,
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
