const express = require('express');
const loginRouter = express.Router();
const User = require('../models/Users');


loginRouter.get('/loginUser', function(req, res){
    const username = req.query.username;
    const password = req.query.password;

    if((username !== null || username !== '') &&
        (password !== null || password !== '')){
        User.find({ username: username }, function(err, users) {

            if (err) {
                console.log('error querying db');
                return res.send(err);
            }

            if(users.length === 0){
                console.log('user not found');
                res.status(401).send('No user with that name');
            } else {
                console.log('User found');
                if(password === users[0].password){
                    console.log('password matches');
                    return res.json('Login successful');
                } else {
                    console.log('password does not match');
                    return res.status(401).send('Bad password');
                }
            }
        });
    }
});

module.exports = loginRouter;