import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ipCount, setIpCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button
          style={{
            backgroundColor: '#61DBFB',
            padding: '10px 20px',
            color: 'white',
            border: 'none',
            borderRadius: '20px',
            fontWeight: 'bold'
          }}
          onClick={()=> setIpCount(ipCount+1)}
        > 
          +1 IP 
        </button>
        <p>IP Count: {ipCount}</p>
      </header>
    </div>
  );
}

export default App;
