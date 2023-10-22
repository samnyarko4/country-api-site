import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ThemeProvider} from 'theme-ui'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Details from './views/details.jsx'

import theme from './theme.jsx'
const router = createBrowserRouter ([
  {
    path:'/',
    element:<App/>
  },
  {
      path:'details/:countryname',
      element:<Details />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>,
)
