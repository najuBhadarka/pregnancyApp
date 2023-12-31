import React from 'react'
import { useRoutes } from 'react-router-dom'

const Dashboard = React.lazy(() => import('../views/dashboard/Dashboard.js'))
const MainLayout = React.lazy(() => import('../layout/MainLayout.js'))
const AuthLayout = React.lazy(() => import('../layout/AuthLayout.js'))
const Login = React.lazy(() => import('../views/pages/login/Login.js'))
const UserList = React.lazy(() => import('../views/pages/user/userList.js'))
const QuestionForm = React.lazy(() => import('../views/pages/Question/QuestionForm.js'))
const UserControl = React.lazy(() => import('../views/pages/user/userAdd.js'))
const QuestionsList = React.lazy(() => import('../views/pages/Question/QuestionList.js'))
const AnswerList = React.lazy(() => import('../views/pages/Question/AnswerList.js'))
const PreviewAnwserSheet = React.lazy(() => import('../views/pages/Question/PreviewAnwserSheet.js'))

const RoutesPath = () => {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Dashboard />,
        },
        {
          path: 'user/user-list',
          element: <UserList />,
        },
        {
          path: 'user/update/:id',
          element: <UserControl mode={'Update'} />,
        },
        {
          path: 'question/create-form',
          element: <QuestionForm mode={'Add'} />,
        },
        {
          path: 'question/update-form/:id',
          element: <QuestionForm mode={'update'} />,
        },
        {
          path: 'question/questions-list',
          element: <QuestionsList />,
        },
        {
          path: 'question/result-list',
          element: <AnswerList />,
        },
        {
          path: 'question/preview-answersheet/:id',
          element: <PreviewAnwserSheet />,
        },
      ],
    },
    {
      path: 'auth',
      element: <AuthLayout />,
      children: [
        {
          path: 'signIn',
          element: <Login />,
        },
      ],
    },
  ])
}

export default RoutesPath
