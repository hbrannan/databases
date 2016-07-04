var models = require('../models');
//this file is for relaying data to the models, and sending results back 2 usrs




module.exports = {
  messages: {

    get: function (req, res) {
      //define an obj that has data that will be passed to the dbQuery
      //HERE you need to pass in a cb that will return some message to the user
      models.messages.get(dbResult, function(err, result) {
        console.log('controllerGet', dbResult);
        if (err) {
          throw err;
        } else {
          //HERE IS WHERE YOU RETURN YOUR RESULTS!: get requests
          // res.writeHead();
          res.end(JSON.stringify(dbResult));
        }
      });
    }, 
    post: function (req, res) {

      var messageData = {
        //id: //DOES AN AUTOINCREMENT ID JUST GET ADDED? 
        message: req.body.message,
        room: req.body.roomname,
        //how does the foreign key work here???
        // user_id: 'SELECT id FROM users LEFT OUTER JOIN messages ON messages.id = users.message_id.id' 
      };
      models.messages.post(messageData, function (err, result) {
        //what would this do
        if (err) {
          throw err;
        }
      });
      res.end();
    } 
  },

  users: {
    get: function (req, res) {   
      //HERE you need to pass in a cb that will return some message to the user
      models.users.get(userData, function(err, result) { 
        if (err) {
          throw err;
        } else {
        //otherwise, on the end of retrieving this data, you need to write it tothe res
          res.end(result);
        }
      });
    },
    post: function (req, res) {
      //post a single user
      var userData = { 
        name: req.body.username,
        'message_id': 'SELECT id FROM messages INNER JOIN users ON messages.user_id = users.id'
      };
      //invoke models.users.post
       //when/if it retrieves a result for you, return a positive write head.
      models.users.post(JSON.stringify(userData), function (err, result) {
        if (err) {
          console.log('controllR');
          throw err;
        } else {
          //what form is the result in?? 
          console.log('controllerUsrPost res:', result);
          //client expecting a result in json
          res.end(JSON.stringify(result));
        }

      });

    }
  }
};

