const path = require('path');
// add names into an array

const User= require('../models/users');
const names=[];

exports.getRegistration = (req, res, next)=>{
    res.sendFile(path.join(__dirname, '../', 'views', 'registration.html'));

}

exports.postregistration= (req, res, next)=>{
    const fname= req.body.fname;
    const lname= req.body.lname;
    // service layer

    

    // dao layer
    User.create({
        firstName:fname,
        lastName:lname
    }).then(result => {
        console.log(result);
    }).catch(err=>{
        console.log(err)
    });

    res.redirect('/registration');

}

exports.getSummary= (req, res, next)=>{
    console.log(names);
    res.sendFile(path.join(__dirname, '../', 'views', 'summary.html'));

}