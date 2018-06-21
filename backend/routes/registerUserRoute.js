const express = require('express');
const registerRouter = express.Router();
const User = require('../models/Users');

registerRouter.route('/registerUser')
        .post(function(req, res) {
            User.find({username: req.body.username}, function (err, user) {
                if (user.length !== 0) {
                    res.json('Username already taken. Please try another one or login now.');
                } else {
                    // console.log(req.body);
                    var newUser = new User();
                    newUser.salutation = req.body.salutation;
                    newUser.first_name = req.body.first_name;
                    newUser.last_name = req.body.last_name;
                    newUser.phone_number = req.body.phone_number;
                    newUser.email = req.body.email;
                    newUser.username = req.body.username;
                    newUser.password = req.body.password;
                    console.log(`User: ${newUser}`);

                    newUser.save()
                        .then(router => {
                            res.json('User successfully added!');
                        })
                        .catch(err => {
                            res.status(400).send('unable to save to db');
                        })
                }
            });
    });

module.exports = registerRouter;