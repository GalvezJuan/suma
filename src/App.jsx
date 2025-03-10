import { useState } from 'react'
import './App.css'
import { Valores } from './Components/Valores'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Suma</h1>
      <Valores />
    </>
  )
}

export default App
