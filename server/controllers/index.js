var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {
      //intercept the posts here and send the body to the models
        //mpodels will then send that body to the controllers. 
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      //intercept the posts here and send the body to the models
            //make sure that you .toSTring or JSON.stsringify to nterpret data
        //mpodels will then send that body to the controllers. 
    // a function which handles posting a message to the database

    //on end of the request, you prbs need to rwrite head 
    //and end the response 

    }
  }
};

