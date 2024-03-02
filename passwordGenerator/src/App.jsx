import { useState, useCallback,useEffect,useRef} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");
  const passwordRef=useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&";
    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);
  const copyPasswordToClip=useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(Password);
  },[Password])
  useEffect(()=>{
    passwordGenerator();
  },[length,charAllowed,numberAllowed,passwordGenerator])

  return (
    <>
      <div className="w-full max-w-lg mx-auto rounded-lg px-4 py-4 my-8 text-red-400 bg-gray-700  ">
        <h1 className="text-center text-4xl">Password Generator</h1>
      <div className="flex shadow-lg rounded-lg overflow-hidden my-4">
        <input type="text" 
        value={Password}
         className="outline-none py-2 px-3 w-full" 
         placeholder="Password"
         readOnly
         ref={passwordRef}/>
         <button 
         className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
         onClick={copyPasswordToClip}>copy</button>
      </div>
      <div className="flex text-lg gap-2">
        <div className="flex items-center gap-x-2">
          <input 
          type="range"
          min={5}
          max={100}
          value={length}
          onChange={(e)=>{
            setLength(e.target.value);
          }}
           />
           <label >length:{length}</label>
        </div>
        <div className="flex items-center gap-x-2">
          <input type="checkbox"
           defaultChecked={numberAllowed}
           id="numberInput"
           onChange={(e)=>{setNumberAllowed((prev)=>(!prev))}} />
           <label >Number</label>
        </div>
        <div className="flex items-center gap-x-2">
          <input type="checkbox"
           defaultChecked={charAllowed}
           id="charInput"
           onChange={(e)=>{setCharAllowed((prev)=>(!prev))}} />
           <label >characters</label>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
