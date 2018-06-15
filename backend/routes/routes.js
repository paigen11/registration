const express = require('express');
const router = express.Router();
const User = require('../models/Users');

router.get('/', function(req, res){
    res.render('index')
});

router.route('/registerUser')
    .post(function(req, res){
        console.log(req.body);
       var user = new User();
       user.salutation = req.body.salutation;
       user.first_name = req.body.first_name;
       user.last_name = req.body.last_name;
       user.phone_number = req.body.phone_number;
       user.email = req.body.email;
       user.username = req.body.username;
       user.password = req.body.password;
       console.log(user);

       user.save()
           .then(router => {
               res.json('User successfully added!');
           })
           .catch(err => {
             res.status (400).send('unable to save to db');
           })
    });

router.route('/updateUser')
    .post(function(req, res) {
       var updatedUserInfo = {
           salutation: req.body.salutation,
           first_name: req.body.first_name,
           last_name: req.body.last_name,
           phone_number: req.body.phone_number,
           email: req.body.email,
           username: req.body.username,
           password: req.body.password
       };
       console.log(updatedUserInfo);
       User.update({_id: req.body._id}, updatedUserInfo, function(err, result){
           if (err)
               res.send(err);
           res.send('User successfully updated!');
       })
    });

router.get('/deleteUser', function(req, res){
   var id = req.query.id;
   User.find({_id: id}).remove().exec(function(err, result) {
       if(err)
           res.send(err);
       res.send('User successfully deleted');
   })
});

router.get('/findUser',function(req, res){
    var username = req.query.username;
    var password = req.query.password;

    if((username !== null || username !== '') &&
        (password !== null || password !== '')){
        User.findOne({$and: [{username: username}, {password: password}],
        function(err, user) {
            if (err)
                res.send(err);
            console.log(user);
            res.json(user);
            loggedIn = true;
        }})
    }
});

module.exports = router;
