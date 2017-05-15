CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
	id integer(11) auto_increment NOT NULL,
    burger_name VARCHAR(25) NOT NULL,
    devoured BOOLEAN NOT NULL,
    date DATETIME NOT NULL,
    primary key (item_id)
);