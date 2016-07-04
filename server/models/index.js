var db = require('../db/index.js');


//connect here (could've just connected on the db/index -- was unrelated error.)
//just: must ensure connx b4 you reach the db query itself!
db.connection.connect();


module.exports = {
  messages: {
    get: function (cb) {
      //fetch all messages info: 
          //id, text, roomname, username
      db.connection.query('SELECT messages.id, messages.message, messages.room, userName FROM messages LEFT OUTER JOIN users on (messages.user_id = users.id)', function(err, result) {
        if (err) {
          throw err;
        } else {
          cb(null, result);
        }
      });

    },
    post: function (messageData, cb) {
            //create a message
      /////insert into messages(text, userid, roomname) values (?, (select id from users where username = ? limit 1), ?)
      db.connection.query('INSERT INTO messages(message,user_id,room) SET ?', messageData, function (err, result) {
        if (err) {
          cb(err, null);
          throw err;
          // callback(err, null);
        } else {  
          callback(null, result);  //or should the cb go outside of this? 
        }
      });
    }
  },


  users: { 
    get: function (cb) {
      //fetch all usernames
      db.connection.query('SELECT * FROM users', function (err, result) {
        // cb(err, null);
        if (err) {
          throw err;
          ///callback()
        } else {
          /////IT MAY BE THIS LINE!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          cb(null, result);
        }
      });
    },
    post: function (userData, callback) {
      //////////"INSERT into users(username) values (?)"  << db.query(queryStr, params, func(e,r){})
      db.connection.query('INSERT INTO users SET ?', userData, function (err, result) {
        if (err) {
          throw err;
          console.log('error!usrPost');
                    ///you prbz don't want the cb(err, null);
          callback(err, null);
        } else {    
          console.log('model query/posted to db!', console.log(result));
          ///////////////!!!!!!!!!!!!!! null as first arg ??!!
          callback(result);
        }
      });
    }
  }


};

