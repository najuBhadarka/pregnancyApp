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
    path: '/indaco/admin',
    element: <MainLayout />,
    children: [
      {
        path: '/indaco/admin',
        element: <Dashboard />,
      },
      {
        path: '/indaco/admin/user/user-list',
        element: <UserList />,
      },
      {
        path: '/indaco/admin/user/update/:id',
        element: <UserControl mode={'Update'} />,
      },
      {
        path: '/indaco/admin/question/create-form',
        element: <QuestionForm mode={'Add'} />,
      },
      {
        path: '/indaco/admin/question/update-form/:id',
        element: <QuestionForm mode={'update'} />,
      },
      {
        path: '/indaco/admin/question/questions-list',
        element: <QuestionsList />,
      },
    ],
  },
  {
    path: '/indaco/admin/auth',
    element: <AuthLayout />,
    children: [
      {
        path: '/indaco/admin/auth/sign-in',
        element: <Login />,
      },
    ],
  },
]

export default routes
