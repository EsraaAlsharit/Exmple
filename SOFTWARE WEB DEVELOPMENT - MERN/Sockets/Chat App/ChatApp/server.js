
// server.js

const express = require('express');
const app = express();
const cors = require('cors');//this need to front end 




require('./server/config/mongoose.config'); // This need for config
app.use(cors());//this need to front end 

app.use(express.json()); // This for model 
app.use(express.urlencoded({ extended: true })); // This for model

require('./server/routes/chatapp.routes')(app);// This for routes

const server = app.listen(8008, () =>
    console.log('The server is all fired up on port 8008')
);

const massage = []
var Name= ""
// To initialize the socket, we need to
// invoke the socket.io library
// and pass it our Express server
const io = require('socket.io')(server, { cors: true });

io.on("connection", socket => {
    (
        socket.on("massage", data => {
            if(data!==""){
                
                massage.push({user:Name, mas:data})
                io.emit("res", massage)
            }
           
        })
        ,socket.on("Name", data => {
            Name =data
           console.log(Name)
        })
    )
})
