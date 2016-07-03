var db = require('../db/index.js');


//connect here (could've just connected on the db/index -- was unrelated error.)
//just: must ensure connx b4 you reach the db query itself!
db.connection.connect();


module.exports = {
  messages: {
    get: function (messageQuery, cb) {
      //fetch all messages info: 
          //id, text, roomname, userName
      db.connection.query('SELECT messages.id, messages.message, messages.room, userName FROM messages LEFT OUTER JOIN users on (messages.user_id = users.id)', function(err, result) {
        if (err) {
          // cb(err, null);
          throw err;
        } else {
          cb(null, result);
        }
      });

    },
    post: function (messageData, cb) {
            //create a message
      callback = callback || function (v) { return v; };
      db.connection.query('INSERT INTO messages(message,user_id,room) SET ?', messageData, function (err, result) {
        if (err) {
                    // cb(err, null);
          throw err;
          // callback(err, null);
        } else {  
          callback(null, result);  //or should the cb go outside of this? 
        }
      });
    }
  },


  users: { 
    get: function (userQuery, cb) {
      //fetch all usernames
      db.connection.query('SELECT * FROM users', function (err, result) {
        // cb(err, null);
        if (err) {
          throw err;
        } else {
          cb(null, result);
        }
      });
    },
    post: function (userData, callback) {
      callback = callback || function (v) { return v; };
      db.connection.query('INSERT INTO users SET ?', userData, function (err, result) {
        if (err) {
          throw err;
          console.log('error!');
          callback(err, null);
        } else {    
          console.log('yup!');
          callback(null, result);
        }
      });
    }
  }


};

