const express = require('express');
const deleteRouter = express.Router();
const User = require('../models/Users');

deleteRouter.delete('/deleteUser', function(req, res){
    console.log(req.query);
   const username = req.query.username;
   User.findOneAndRemove({username: username}, function(err) {
       if(err) res.send(err);
       console.log('User deleted');
       res.json('User successfully deleted');
   })
});

module.exports = deleteRouter;
