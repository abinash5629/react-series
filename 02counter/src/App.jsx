import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter]=useState(10)
  //let counter=9

  const increasecount=()=>{
    if (counter < 20){
      counter=counter+1
      setcounter(counter)
      counter=counter+1
      setcounter(counter)
      counter=counter+1
      setcounter(counter)
    }
  }
  const decreasecount=()=>{
    if (counter > 0){
      counter=counter-1
      setcounter(counter)
      counter=counter-1
      setcounter(counter)
      counter=counter-1
      setcounter(counter)
    }
    
  }
  

  return (

    <>
    <h1>chai aur react {counter}</h1>
    <h2>exclusively done by abinash</h2>

    <button class="bu" id='inc' onClick={increasecount}>increase count {counter}</button>

    <button class="bu" id='dec' onClick={decreasecount}>decrease count {counter}</button>

    <p>looking like my 1st react project</p>
    
    </>
  )

  
}

export default App
