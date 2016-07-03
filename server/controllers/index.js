var models = require('../models');

//this file is for handing over the data
module.exports = {
  messages: {

    get: function (req, res) {
      //figure out what the GET request is asking for
      //have that help influence the query string
    }, 
    post: function (req, res) {

      var messageData = {
        message: req.body.message,
        room: req.body.roomname,
        user_id: 'SELECT id FROM users LEFT OUTER JOIN messages ON messages.id = users.message_id.id' 
      };
      models.messages.post(messageData, function (err, result) {
        //what would this do
      });
      res.end();
    } 
  },

  users: {
    get: function (req, res) {   

         //or a specifically queried user? 
    },
    post: function (req, res) {
      //post a single user
      console.log(req.body);
      var userData = { 
        name: req.body.username,
        message_id: '1234'
      };
      console.log('heeeere', req.body.username);
      models.users.post(userData);
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

