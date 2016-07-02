-- DROP DATABASE  chat

CREATE DATABASE IF NOT EXISTS chat;

USE chat;

CREATE TABLE IF NOT EXISTS messages ( 
  id int,
  message CHAR(30),
  room CHAR(7),
  user_id int
);

DESCRIBE messages;

CREATE TABLE IF NOT EXISTS users  (
  id int, 
  name CHAR(7),
  message_id int
);

DESCRIBE users;

SHOW TABLES;