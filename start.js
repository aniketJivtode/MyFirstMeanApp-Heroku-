const express =require('express');
const mongoose=require('mongoose');
const path=require('path');
const bodyParser=require('body-parser');
const route=require('./routes/route');
const cors=require('cors');
const port=3030;



//Use express function 
var app=express();

//Get BodyParser
app.use(bodyParser.json());



//set up middleware
//Use Cross origin request service
app.use(cors());

//set static pages
app.use(express.static(path.join(__dirname,'public')));

app.use(express.static(__dirname + 'client/dist/index.html'));



//Create Mongodb Connection
mongoose.connect('mongodb://Aniket:19951113aa@ds155492.mlab.com:55492/contact-list',{useNewUrlParser: true});


//Check wheather connection is established or not
mongoose.connection.on('connected',()=>{
    console.log("Mongo connection established !!");
});




//Check wheather connection is established or not
mongoose.connection.on('error',(err)=>{
    console.log("Mongo connection failed "+err);
});


app.get('/',(req,res)=>{
    res.send("HOME PAGE");
});



//Getting Routes
app.use('/api',route,()=>{
    console.log("API ROUTE CALLED");
});

app.listen(port,()=>{
    console.log("Server running");
});

