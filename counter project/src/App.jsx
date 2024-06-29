import { useState } from 'react'

import './App.css'

function App() {
  let [counter,setCounter]=useState(15)
  const addValue=()=>{
    counter=counter+1;
    if(counter>20){
      counter=20
      setCounter(counter)
    }
    else{
      setCounter(counter);
    }
    
  }
  const removeValue=()=>{
    counter=counter-1;
    if(counter<0){
      counter=0;
      setCounter(counter);
    }else{
      setCounter(counter)
    }
    
    
  }

  return (
    <>
    <h1>Ankur Garg {counter}</h1>
    <h2>Counter:{counter}</h2>
    <button onClick={addValue}>Add value {counter}</button><br/>
    <button onClick={removeValue}>Remove value {counter}</button>
    

    </>
  )
}

export default App
