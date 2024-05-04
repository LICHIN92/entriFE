import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import Signup from './Signup.jsx'
import Ruot from './Ruot.jsx'
import Newblog from './Newblog.jsx'
import Blog from './Blog.jsx'
import Login from './Login.jsx'
import PrivteRoute from './PrivteRoute.jsx'
import EntriRout from './entriNews/EntriRout.jsx'
import Treanding from './entriNews/Treanding.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Ruot />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/new',
        element: (
          <PrivteRoute>
            <Newblog />
          </PrivteRoute>
        )
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/entri',
        element: <EntriRout/>
      },
      {
        path: '/treanding',
        element: <Treanding/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
