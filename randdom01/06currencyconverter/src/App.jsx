import { useState } from 'react'
import {inputbox} from './components'
import { userfunctioninfo } from './hooks/userfunctioninfo'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [amount,setAmount]=useState(0)
  const [from,setfrom]=useState("usd")
  const [to,setto]=useState("inr")
  const[convertedamount,setconvertedamount]=useState(0)
  
  const currencyinfo=usecurrencyinfo(from)

  const options=Objects.keys(currencyinfo)

  const swap= ()=>{
    setfrom(to)
    setto(from)
    setconvertedamount(amount)
    setAmount(convertedamount)

  }

  const convert = () =>{
    setconvertedamount(amount * currencyinfo[to])
  }
  return (
    <>
      <h1 className='text-3xl bg-orange-500'>Currency app</h1>
    </>
  )
}

export default App
