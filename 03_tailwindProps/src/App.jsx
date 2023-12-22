import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/card.jsx"

function App() {
  // const [count, setCount] = useState(0)
  let obj = {
    name: "vaibhav",
    age: 21
  }

  let arr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>
        Tailwind Test
      </h1>
      <Card username='Vaibhav Baneshi' btnText='Verify me' someObj = {obj}/>
      <Card username='Baneshi Vaibhav' btnText='Press me' myArr = {arr}/>
    </>
  )
}

export default App
