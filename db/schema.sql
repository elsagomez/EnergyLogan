CREATE DATABASE energylogan_db;

USE energylogan_db;

##Projects Table
CREATE TABLE projects(
  project_id INT NOT NULL AUTO_INCREMENT,
  project_name VARCHAR(255) NOT NULL,
  customer VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  contact_name VARCHAR(255) NOT NULL,
  contact_number VARCHAR(255) NOT NULL,
  account_number INT NOT NULL,
  number_of_floors INT NOT NULL,
  other VARCHAR(255) NOT NULL,
  scheduled_date DATE,
  comments VARCHAR(500),
  PRIMARY KEY (project_id)
);

CREATE TABLE survey(
	survey_id INT NOT NULL AUTO_INCREMENT,
  project_id INT NOT NULL,
  floor_number INT,
  room VARCHAR(255) NOT NULL,
  fixture_id INT NOT NULL,
  quantity INT NOT NULL,
  PRIMARY KEY (survey_id)
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