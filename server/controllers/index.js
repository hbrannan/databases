var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      //collect info from the request data
      // 
    }, 
    post: function (req, res) {
      var messageData = {
        message: req.body.message,
        room: req.body.roomname,
        user_id: 'SELECT id FROM users INNER JOIN messages ON messages.id = users.message_id.id' 
      };
      console.log(req.body.message);
      models.messages.post(messageData, function() {

      });
      res.end();
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {   
    },
    post: function (req, res) {
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

