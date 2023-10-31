const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mysql= require('mysql');
const myConnection = require('express-myconnection');


const app = express();

// importing routes//

const customerRoutes = require('./routes/customer')

// settings
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// middlewares 

app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host: "localhost",
    user: "root",
    password : "",
    port : 3306,
    database : "Crud",

}, 'single'));

app.use(express.urlencoded({extended : false}));

// routes

app.use('/', customerRoutes);


// static files 
app.use(express.static(path.join(__dirname, 'public')));



// starting the server
app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});

