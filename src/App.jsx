import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1 className="text-3xl font-bold underline">
      Hello world!  </h1>
        <h2 className='font-semibold text-center text-red-600'>This is my first project using Vite</h2>
       </div>
    </>
  )
}

export default App
