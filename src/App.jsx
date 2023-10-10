import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Another from './Another';


function App() {
  const [count, setCount] = useState(0)

  const increament = (prevCount) => 
    setCount(prevCount => prevCount + 1)
  
  const decrement = (prevCount) =>  
    setCount(prevCount => prevCount - 1)
  

  const somestyle = {
      colour:'red',
      fontWeight: "bold",
      fontSize: "30px",
      background:"red"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Another name="Karan"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          {count}
          <button onClick={decrement}>-</button>
          <button onClick={increament}>+</button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        { true &&
        <p style={{background:"red"}}>Hello</p>
        }
      </header>
    </div>
  );
}

export default App;
