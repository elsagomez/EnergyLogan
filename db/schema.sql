CREATE DATABASE energylogan_db;

USE energylogan_db;

CREATE TABLE users(
  user_id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL,
  user_type VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id)
);

##Projects Table
CREATE TABLE projects(
  project_id INT NOT NULL AUTO_INCREMENT,
  project_name VARCHAR(255) NOT NULL,
  customer VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  contact_name VARCHAR(255) NOT NULL,
  contact_number VARCHAR(255) NOT NULL,
  account_number INT NOT NULL,
  num_floors INT NOT NULL,
  other VARCHAR(255) NOT NULL,
  scheduled_date DATE,
  comments VARCHAR(500),
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (project_id)
);

CREATE TABLE surveys(
	survey_id INT NOT NULL AUTO_INCREMENT,
  project_id INT NOT NULL,
  floor_number INT,
  room VARCHAR(255) NOT NULL,
  fixture_id VARCHAR(255) NOT NULL,
  quantity INT NOT NULL,
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (survey_id)
);

<<<<<<< HEAD
CREATE TABLE PreFixtures (
    preFixID varchar(50),
    pre_lampCode varchar(255),
    pre_type varchar(255),
    pre_desccription varchar(255),
    pre_ballast varchar(255),
    pre_lampNum int,
    pre_watts int,
    pre_wattsPerFix int,
    primary key (preFixID)
);
=======
CREATE TABLE fixtures(
  fixture_id VARCHAR(100) NOT NULL,
  lamp_code VARCHAR(100),
  type VARCHAR(100),
  description VARCHAR(255),
  ballast VARCHAR(100),
  num_lamps INT,
  watts_per_lamp INT,
  watts_per_fixture INT,
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (fixture_id)
);

>>>>>>> 52c62a8f3c4953db7e7e4fc1df3c4b1d49428c31
