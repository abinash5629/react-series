import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let name12="abinash"
  let name22="sanjay"
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwind test</h1>
    <Card name1={name12} name2={name22}/>

    </>
  )
}

export default App
