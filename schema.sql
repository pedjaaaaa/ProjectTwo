DROP DATABASE IF EXISTS team_up;
CREATE DATABASE team_up;

USE team_up;

CREATE TABLE Users (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(45) NULL,
    email VARCHAR(45) NULL,
    password VARCHAR(45) NULL
);

INSERT INTO Users (username, email, password)
VALUES ("sinae", "user1@gmail.com", "0090");

