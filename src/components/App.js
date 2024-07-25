
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [input, setInput] = useState("");
  const handleInput = (e)=>{
    setInput(e.target.value);
    e.preventDefault();
  }
  
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Enter your Name:</h1>
        <form>
          <input type="text" value={input} onChange={handleInput}></input>
        </form>
        <p>{`Hello ${input}!`}</p>
    </div>
  )
}

export default App
