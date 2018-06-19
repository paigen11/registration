const express = require('express');
const userInfoRouter = express.Router();
const User = require('../models/Users');

userInfoRouter.get(('/getUserInfo'), function(req, res){
    const username = req.query.username;

    User.find({ username: username }, function(err, user) {

        if (err) {
            console.log('error querying db for user info');
            return res.send(err);
        }

        if(user.length === 0){
            console.log('User not found');
            res.status(404).send('No user with that name exists in the db');
        } else {
            console.log('User info found');
            res.json(user);
        }
    });
});

export default userInfoRouter;

