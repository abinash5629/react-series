import React from 'react'
import ReactDOM from 'react-dom/client'
function Hero(){
    return(<h1>hero</h1>)
    
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Hero />
    </React.StrictMode>,
)

