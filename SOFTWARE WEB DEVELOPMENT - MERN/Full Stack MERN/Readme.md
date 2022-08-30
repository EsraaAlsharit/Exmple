1. Create your MERN stack folder structure

```md
mkdir myNewProject
cd myNewProject
npm init -y
npm install cors
npm install express
npm install mongoose
````
3. Create your server folder

2. Create your server.js file

```md
const express = require('express');
const cors = require('cors');
const app = express();
require('./server/config/mongoose.config'); // This is new
app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
require('./server/routes/products.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

````

3. Create your model, controller, routes, and config folders in your server folder
### mongoose.config

```md
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/name_of_your_DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
````


4. Create React App
```md
npx create-react-app client
cd client
npm install axios
npm install react-router-dom@5

npm install --save bootstrap
````

if you pull it 
```md
cd client
npm install
npm install axios
npm install cors
npm install react-router-dom@5

npm install --save bootstrap
````
