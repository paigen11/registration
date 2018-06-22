const express = require('express');
const updateUserRouter = express.Router();
const User = require('../models/Users');

updateUserRouter.route('/updateUser')
    .post(function(req, res) {
        const updatedUserInfo = {
            salutation: req.body.salutation,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_number: req.body.phone_number,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        };
        console.log(updatedUserInfo);
        User.update({username: req.body.username}, updatedUserInfo, function(err, result){
            if (err) {
                console.log('error updating user info in the db');
                res.send(err);
            } else {
                res.json('User successfully updated!');
            }
        })
    });

module.exports = updateUserRouter;