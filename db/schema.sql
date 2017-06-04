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


CREATE TABLE surveys(
	survey_id INT NOT NULL AUTO_INCREMENT,
  project_id INT NOT NULL,
  prefixture_id varchar(50),
  floor_number INT,
  room VARCHAR(255) NOT NULL,
  quantity INT NOT NULL,
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (survey_id),
  FOREIGN KEY (project_id) REFERENCES projects(project_id) ON DELETE CASCADE,
  FOREIGN KEY (prefixture_id) REFERENCES PreFixtures(preFixID) ON DELETE CASCADE

);


