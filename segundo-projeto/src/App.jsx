import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponents from './components/MyComponents'
import OtherComponent from './components/OtherComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyComponents />
      <p> Este parágrafo é do App.jsx</p>
       <OtherComponent
    ></OtherComponent>
    </>
  )
}

export default App
