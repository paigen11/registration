const express = require('express');
const router = express.Router();
const User = require('../models/Users');

router.get('/', function(req, res){
    res.render('index')
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
