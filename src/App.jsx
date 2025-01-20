import { useState } from 'react'
import './App.css'
import './AppMobile.css'
import Header from './components/Header.jsx'
import Splash from './components/Splash.jsx'


import { Outlet} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Splash/>
      <Header/>
      <Outlet/>

    </>
  )
}

export default App
