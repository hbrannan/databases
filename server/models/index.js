var db = require('../db');

db.connection.connect();

module.exports = {
  messages: {
    get: function () {
      //takes req for info from displayCHatRoomz
      //and gives it back
    },
    post: function (messageData, callback) {
      callback = callback || function (v) { return v; };
      db.connection.query('INSERT INTO messages SET ?', messageData, function (err, result) {
        if (err) {
          throw err;
          callback(err, null);
        } else {    
          callback(null, result);
        }
        // callback(err, result);
      });
    }
  },

  users: {
    // Ditto as above.
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

