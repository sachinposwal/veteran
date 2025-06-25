import { useState } from 'react'
import './App.css'
import './AppMobile.css'
import Header from './components/Header.jsx'



import { Outlet} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Outlet/>

    </>
  )
}

export default App
