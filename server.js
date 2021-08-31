// Setup empty JS object to act as endpoint for all routes
projectData = {};
const bodyParser = require('body-parser')
// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
app.use(express.static('website'));
const port = 3000;
const server = app.listen(port, listening);
 function listening(){
console.log(`running on localhost: ${port}`);
 }


 app.get('/all', (request, response)=> {
  response.send(projectData);             //get rout to sent data in client server 
  //console.log("try") //this log for try my get route working
});
app.post('/add', (req,res)=>{
    res.send('POST received');
});

app.post('/temp', (req,res)=>{ //recive data from client side and assignt in object
    projectData.content=req.body.content;
    projectData.temp=req.body.temp;
   // console.log(projectData)//this log for try my get route working
});

