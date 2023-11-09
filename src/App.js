import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ipCount, setIpCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [showInput, setShowInput] = useState(true);


  const handleInputChange = (event) => {
    if (event.key === 'Enter') {
      setShowInput(false);
    } else {
      setInputValue(event.target.value);
      setShowInput(true);
    }
  };


  let contentToRender;

  if (inputValue.toLowerCase() === 'masum' || inputValue.toLowerCase() === 'rafae' || inputValue.toLowerCase() === 'sarim') {
    contentToRender = (
      <>
        <button
          style={{
            backgroundColor: '#61DBFB',
            padding: '10px 20px',
            color: 'white',
            border: 'none',
            borderRadius: '20px',
            fontWeight: 'bold',
          }}
          onClick={() => setIpCount(ipCount + 1)}
        >
          +1 IP
        </button>
        <p>IP Count: {ipCount}</p>
      </>
    );
  } else if (inputValue.toLowerCase() === 'faysal' || inputValue.toLowerCase() === 'taha') {
    contentToRender = (<>
    <p>IP has been revoked</p>
    <p>Lesson one of software</p>
    <p>Never mess with the software team</p>
    </>)
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {showInput && (
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleInputChange}
            placeholder="Enter your name"
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ddd',
              width: '300px',
              margin: '10px 0',
              fontSize: '16px',
            }}/>
            
        )}
        {!showInput && contentToRender}
        {!showInput && inputValue === 'rafae' ? <p>Your IP is safe, but you're on thin ice<br/>Just remember who head of software is</p> : null}
      </header>
    </div>
  );
}

export default App;
