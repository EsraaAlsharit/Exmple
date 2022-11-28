const express = require('express');//needed for connection 
const cors = require('cors');//this need to front end 
const app = express();//needed for connection 
require('./server/config/mongoose.config'); // This need for config
app.use(cors());//this need to front end 

app.use(express.json()); // This for model 
app.use(express.urlencoded({ extended: true })); // This for model

require('./server/routes/athletes.routes')(app);// This for routes

app.listen(8001, () => {
    console.log("Listening at Port 8000")
})//needed for connection 