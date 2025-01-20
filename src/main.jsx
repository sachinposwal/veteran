import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './AppMobile.css'
import { Home, About, Employers, Services, Openings, Plans} from './Components/index.jsx'

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
      {
        path:'/Plans',
        element:<Plans/>
      },
      {
        path:'/Openings',
        element:<Openings/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </StrictMode>,
)
