import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AppRouters from './components/router/AppRouters'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AppRouters/>
    </>
  )
}

export default App
