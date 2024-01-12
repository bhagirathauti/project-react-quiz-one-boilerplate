import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Quiz from './Components/Quiz'
import Home from './Components/Home'
import Result from './Components/Result'

function App() {


  return (
    <>
      <div>
        <Home/>
        <Quiz/>
        <Result/>
      </div>
    </>
  )
}

export default App
