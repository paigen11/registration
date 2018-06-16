const express = require('express');
const loginRouter = express.Router();
const User = require('../models/Users');


loginRouter.get('/loginUser',function(req, res){
    const username = req.query.username;
    const password = req.query.password;

    if((username !== null || username !== '') &&
        (password !== null || password !== '')){
        User.findOne({ username: username }, function(err, users) {

            if (err) {
                console.log('error querying db');
                return res.send(err);
            }

            if(users === null){
                console.log('user not found');
                res.json('No user with that name');
            } else {
                console.log(`User found ${users}`);
                if(password === users.password){
                    console.log('password matches');
                    return res.json(users);
                } else {
                    console.log('password does not match');
                    return res.json('Bad password');
                }
            }
        });
    }
});

module.exports = loginRouter;