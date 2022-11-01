import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';

function App() {
  // notice that we pass a callback function to initialize the socket
  // we don't need to destructure the 'setSocket' function since we won't be updating the socket state
  const [socket] = useState(() => io(':8000'));//listing line
  
  const [message, setMessage] = useState("")

  useEffect(() => {
    // we need to set up all of our event listeners
    // in the useEffect callback function
    console.log('Is this running?');
    socket.on('welcome', (data) => {
      setMessage(data)
      return () => socket.disconnect(true)
    });
  }, [socket]);

  const runSocket = () => {
    socket.emit("from_the_client", "hello from client!")
  }

  return (
    <div className="App">
      <h1>Socket Test</h1>
      <p>{message}</p>
      <button onClick={runSocket}>click me!</button>
    </div>
  );
}

export default App;
