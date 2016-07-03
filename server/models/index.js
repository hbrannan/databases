var db = require('../db');

db.connection.connect();

module.exports = {
  messages: {
    get: function (messageQuery, cb) {
      //fetch all messages
      db.connection.query('SELECT * FROM messages', function(err, res) {
        if (err) {
          throw err;
        } else {
          cb(res);
        }
      });

    },
    post: function (messageData, cb) {
            //create a message
      callback = callback || function (v) { return v; };
      db.connection.query('INSERT INTO messages SET ?', messageData, function (err, result) {
        if (err) {
          throw err;
          // callback(err, null);
        } else {  
          callback(null, result);  //or should the cb go outside of this? 
        }
      });
    }
  },

  users: {
      //fetch all users
    get: function () {},
    post: function (userData, callback) {
      callback = callback || function (v) { return v; };
      db.connection.query('INSERT INTO users SET ?', userData, function (err, result) {
        if (err) {
          throw err;
          console.log('error!');
          callback(err, null);
        } else {    
          console.log('yup!');
          callback(null, err);
        }
      });
    }
  }
};

