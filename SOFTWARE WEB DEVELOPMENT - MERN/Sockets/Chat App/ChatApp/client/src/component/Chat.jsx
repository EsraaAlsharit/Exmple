import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';


function Chat() {
  // notice that we pass a callback function to initialize the socket
  // we don't need to destructure the 'setSocket' function since we won't be updating the socket state
  const [socket] = useState(() => io(':8008'));//listing line
  
  const [messages, setMessages] = useState([])
//   const [user, setuser] = useState("")
  const [message, setMessage] = useState("")
  
  useEffect(() => {
    
    socket.on('res', msg=> {      
      setMessages(prevMea=>{
        return [...msg];
      })
    });
  },[]);

  const Send = (e) => {
    e.preventDefault();
    socket.emit("massage", message)
    setMessage("")
  }

  return (
    
    <div className="App container px-5">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <div className='thumbnail mx-5 my-2 p-3 bg-secondary text-white'>
      <h1>MERN Chat</h1>
      </div>
      <div className='card mx-5 p-5 '>{
        messages.map( (mesg,i)=>{
          return(   
                <p><spam>{mesg["user"]}:</spam> {mesg["mas"]}</p>
          )}
        )}
      </div>
   
      <div className='card mx-5 p-5'>
            <form onSubmit={Send} className="form-group row">
            <div class="col-sm-10">
                <input type="text" class="form-control" onChange={(e)=>setMessage(e.target.value)} value={message}/><spam>    </spam>
            </div>
                <button className='btn btn-primary col-sm-2' onClick={Send}>Send</button>
            </form>
      </div>
      
    </div>
  );
}

export default Chat;
