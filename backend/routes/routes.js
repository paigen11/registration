const express = require('express');
const router = express.Router();
const User = require('../models/Users');

router.get('/', function(req, res){
    res.render('index')
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

// router.get('/loginUser',function(req, res){
//     var username = req.query.username;
//     var password = req.query.password;
//
//     console.log(username);
//     console.log(password);
//
//     if((username !== null || username !== '') &&
//         (password !== null || password !== '')){
//         User.findOne({ username: username }, function(err, users) {
//             if (err) {
//                 console.log('error querying db');
//                 return res.send(err);
//             }
//
//             if(users === null){
//                 console.log('user not found');
//                 res.send('no user with that name');
//             } else {
//                 console.log(`User found ${users}`);
//                 if(password === users.password){
//                     console.log('password matches');
//                     return res.send(users);
//                 } else {
//                     console.log('password does not match');
//                     return res.send('bad password');
//                 }
//
//             }
//
//             });
//         }
// });

module.exports = router;
