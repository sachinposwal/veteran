import { useState } from 'react'
import './App.css'
import './AppMobile.css'
import Header from './Components/Header'
import Splash from './Components/Splash'


import { Outlet} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Splash/>
      <Header />
      <Outlet/>

    </>
  )
}

export default App
