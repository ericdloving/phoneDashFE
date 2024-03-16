import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Papa from "papaparse"


function App() {
  const [count, setCount] = useState(0)
  const [file,setFile] = useState({unchanged: true})

  function handleFileSelect(event) {
    if(event.target.files[0])console.log(event.target.files[0])
    setFile(event.target.files[0])
  }
  function handleClick(event) {
    if(file.unchanged) return false
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function(results) {
        console.log(results.data)
      },
    })
  }
  return (
    <>
      <div>
        <input type="file" onChange = {handleFileSelect} />
        <button type="submit"  onClick = {handleClick}>submit</button>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
