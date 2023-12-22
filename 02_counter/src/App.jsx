import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)
  
  function addValue() {
    counter += 1
    console.log("addValue clicked", counter);
    checkValue() 

    setCounter(counter)
  }

  function removeValue() {
    counter -= 1
    console.log('removeValue clicked', counter);
    checkValue() 

    setCounter(counter)
  }

  function checkValue() {
    if(counter < 0) {
      document.querySelector('#subtractValue').setAttribute('disabled', '')
      
      counter += 1
      alert(`You cannot go below ${counter}`);
      setCounter(counter)
    }
    
    else if(counter === 0)
      document.querySelector('#subtractValue').removeAttribute('disabled')
  
  
    else if(counter > 10) {
      document.querySelector('#addValue').setAttribute('disabled', '')
    
      counter -= 1
      alert(`You cannot go above ${counter}`);
      setCounter(counter)
    }
    
    else if(counter === 10)
      document.querySelector('#addValue').removeAttribute('disabled')
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter Value: {counter}</h2>

      <button id="addValue"
      onClick={addValue}
      >Add Value</button>
      <br/>
      <button id= "subtractValue"
      onClick={removeValue}
      >Subtract Value</button>
    </>
  )
}

export default App
