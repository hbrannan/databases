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
          req.writeHead();
          res.end(dbResult);
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
      //define an obj that has data that will be passed to the dbQuery
      var userData = {
        ///?????
      };
      //HERE you need to pass in a cb that will return some message to the user
      models.users.get(userData, function(err, result) { 
        if (err) {
          throw err;
        }
        return result; 
      });
    },
    post: function (req, res) {
      //post a single user
      var userData = { 
        //does the uniq usrID just get added? 
        id: '1234',
        name: req.body.username,
        'message_id': '1234'
      };

      models.users.post(userData, function (err, result) {
        if (err) {
          throw err;
        }
      });
      res.end();
      //intercept the posts here and send the body to the models
            //make sure that you .toSTring or JSON.stsringify to nterpret data
        //mpodels will then send that body to the controllers. 
    // a function which handles posting a message to the database

    //on end of the request, you prbs need to rwrite head 
    //and end the response 

    }
  }
};

