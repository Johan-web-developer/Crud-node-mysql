--- creating the database---

CREATE DATABASE Crud;

-- using the database---
use Crud;


CREATE TABLE customer(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    adress VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);



--- tp show all tables----
SHOW TABLES;

---- to describe the table---
DESCRIBE customer;