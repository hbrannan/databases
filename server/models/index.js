var db = require('../db');

db.connection.connect();

module.exports = {
  messages: {
    get: function () {
      //takes req for info from displayCHatRoomz
      //and gives it back
    },
    post: function (messageData, callback) {
      db.connection.query('INSERT INTO messages SET ?', messageData, function (err, result) {
        if (err) {
          console.log('error!');
        } else {    
          callback(result);
        }
        callback(err, result);
      });
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (userData) {
      db.connection.query('INSERT INTO users SET ?', userData, function (err, result) {
        if (err) {
          console.log('error!');
        } else {    
          console.log('yup!');
        }
      });
    }
  }
};

