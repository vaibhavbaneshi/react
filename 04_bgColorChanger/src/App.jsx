import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('black')

  return (
    <>
      <div className='duration-2000' style={{backgroundColor: color, width: '100%', height: '100vh'}}>
      <div className="fixed flex flex-wrap justify-center inset-x-80 bottom-10 p-3 bg-gray-400 rounded-lg space-x-3">
        <button className="px-5 bg-red-500 hover:bg-red-700 hover:text-black rounded-full" onClick={() => setColor("red")}>Red</button>
        <button className="px-5 bg-green-500 hover:bg-green-700 hover:text-black rounded-full" onClick={() => setColor('green')}>Green</button>
        <button className="px-5 bg-blue-500 hover:bg-blue-700 hover:text-black rounded-full" onClick={() => setColor('blue')}>Blue</button>
        <button className="px-5 bg-pink-500 hover:bg-pink-700 hover:text-black rounded-full" onClick={() => setColor('pink')}>Pink</button>
        <button className="px-5 bg-gray-500 hover:bg-gray-700 hover:text-black rounded-full" onClick={() => setColor('gray')}>Grey</button>
        <button className="px-5 bg-yellow-500 hover:bg-yellow-700 hover:text-black rounded-full" onClick={() => setColor('yellow')}>Yellow</button>
        <button className="px-5 bg-purple-500 hover:bg-purple-700  hover:text-black rounded-full" onClick={() => setColor('purple')}>Purple</button>
        <button className="px-5 bg-white hover:bg-gray-200 text-black rounded-full" onClick={() => setColor('white')}>White</button>
        <button className="px-5 rounded-full hover:bg-gray-700" onClick={() => setColor('black')}>Black</button>
      </div>
      </div>
    </>
  )
}

export default App
