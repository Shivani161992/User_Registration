// core modules
const http = require('http');
const path= require('path');

// 3rd party modules
const express = require('express');
const bodyParser = require('body-parser');

// module usage
const app = express();
app.use(bodyParser.urlencoded({extended:false}));

// database connection
const sequelize = require('./util/database');

// import models
const User = require('./models/users');


//importing different routes
const usersroutes= require('./routes/users');
const summaryroutes= require('./routes/summary');


// calling different routes
app.use(usersroutes);
app.use(summaryroutes);

app.use('/', (req, res, next)=>{
    res.sendFile(path.join(__dirname, 'views', 'home.html'));

})


User.sequelize.sync().then(result =>{
    // console.log(result);
    app.listen(3000);
}).catch(err=>{
    console.log(err);

});

// create server and listen it on 3000 port
// app.listen(3000);

