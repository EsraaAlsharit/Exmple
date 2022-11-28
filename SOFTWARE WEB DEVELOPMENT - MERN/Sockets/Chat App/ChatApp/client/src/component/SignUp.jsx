import React, { useState } from 'react';
import io from 'socket.io-client';
import '../App.css';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import {useHistory} from 'react-router-dom'


function SignUp() {
  // notice that we pass a callback function to initialize the socket
  // we don't need to destructure the 'setSocket' function since we won't be updating the socket state
  const [socket] = useState(() => io(':8008'));//listing line
  const history = useHistory();

  const [Name , setName] = useState("")


  const Send = () => {
    socket.emit("Name", Name)
    if(Name){
        history.push("/chat")
    }
  }


  return (
    
    <div className="App container px-5">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <div className='thumbnail m-4 p-3 bg-secondary text-white'>
      <h1>MERN Chat</h1>
      </div>
      <div  className='card p-5 m-4' >
        <h2 className='mb-5'>Get started right now!</h2>
        <p className='text-left'>I want to start chating with the name..</p>
        <form onSubmit={Send} >
        <div class="form-group row">
          <div class="col-sm-10">
            <input type="text" class="form-control" onChange={(e)=>setName(e.target.value)} placeholder="My Name"/>
          </div>
          <button className='btn btn-success  col-sm-2' onClick={Send}>Start Chatting</button>
          </div>
        </form>
      </div>
      
    </div>
  );
}

export default SignUp;
