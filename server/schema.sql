CREATE DATABASE IF NOT EXISTS chat;

USE chat;

CREATE TABLE messages ( 
  id INTEGER NOT NULL AUTO_INCREMENT,
  message TEXT(160) NOT NULL,
  room VARCHAR(7),
  user_id INTEGER NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

DESCRIBE messages;

CREATE TABLE users  (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(7),
  message_id INTEGER NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (message_id) REFERENCES messages(id)
);

DESCRIBE users;

SHOW TABLES;

  -- FOREIGN KEY (user_id) REFERENCES users(id)