import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("green")

  return (
    <>
    <div className="main" style={{backgroundColor:color}}>
      <div className="container">
        <div className="bar">
          <button className='btn' style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
          <button className='btn' style={{backgroundColor:"violet"} } onClick={()=>setColor("violet")}>Violet</button>
          <button className='btn' style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
          <button className='btn' style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
          <button className='btn' style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
          <button className='btn' style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>

        </div>
      </div>
    </div>
    </>
  )
}

export default App
