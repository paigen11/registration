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
       User.update({username: req.body.username}, updatedUserInfo, function(err, result){
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

module.exports = router;
