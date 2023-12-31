import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState()
  const [numberAllowed, setNumber] = useState(false)
  const [charAllowed, setcharacter] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword ])

  const passwordRef = useRef(null)
  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password]) 

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, setPassword])
  return (
  <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3 text-4xl'>Password Generator</h1>
      <div className='flex-shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type='text'
        value = {password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ></input>
        <button 
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={copyPasswordToClipBoard}
        >Copy</button>
      </div>
      <div className='flex text-sm gap--2'>
        <div className='flex items-enter gap-x-1'>
          <input
          type='range'
          min={6}
          max={100}
          onChange={(e) => {setLength(e.target.value)}}
          >
          </input>
            <label>Length: {length}</label>
        </div>
      <div>
        <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
                setNumber((prev) => !prev);
            }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setcharacter((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
      </div>
    </div>
  </>
  )
}

export default App