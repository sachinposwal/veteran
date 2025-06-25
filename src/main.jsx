import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './AppMobile.css'
import Home from './components/Home.jsx'
import Employers from './components/Employers.jsx'
import Services from './components/Services.jsx'
import Openings from './components/Openings.jsx'
import About from './components/About.jsx'
import Plans from './components/Plans.jsx'
import { Analytics } from "@vercel/analytics/react"


import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/About',
        element:<About/>
      },
      {
        path:'/Services',
        element:<Services/> 
      },
      {
        path:'/Employers',
        element:<Employers/>
      },
      // {
      //   path:'/Plans',
      //   element:<Plans/>
      // },
      {
        path:'/Openings',
        element:<Openings/>
      },
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    <App />
    <Analytics/>
    </RouterProvider>
  </StrictMode>,
)
