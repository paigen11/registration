const express = require('express');
const registerRouter = express.Router();
const User = require('../models/Users');

registerRouter.route('/registerUser')
    .post(function(req, res){
        // console.log(req.body);
        var user = new User();
        user.salutation = req.body.salutation;
        user.first_name = req.body.first_name;
        user.last_name = req.body.last_name;
        user.phone_number = req.body.phone_number;
        user.email = req.body.email;
        user.username = req.body.username;
        user.password = req.body.password;
        console.log(`User: ${user}`);

        user.save()
            .then(router => {
                res.json('User successfully added!');
            })
            .catch(err => {
                res.status (400).send('unable to save to db');
            })
    });

module.exports = registerRouter;