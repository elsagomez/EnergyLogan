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
  account_number VARCHAR(50) NOT NULL,
  floors VARCHAR(500) NOT NULL,
  scheduled_date DATE,
  comments VARCHAR(500),
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (project_id)
);

CREATE TABLE floors (
    floor_id INT NOT NULL AUTO_INCREMENT,
    floor_number VARCHAR(50),
    ProjectProjectId INT NOT NULL,
    createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (floor_id),
    FOREIGN KEY (ProjectProjectId)
        REFERENCES projects (project_id)
        ON DELETE CASCADE
);

CREATE TABLE PreFixtures (
    preFixID VARCHAR(50),
    pre_lampCode VARCHAR(255),
    pre_type VARCHAR(255),
    pre_desccription VARCHAR(255),
    pre_ballast VARCHAR(255),
    pre_lampNum INT,
    pre_watts INT,
    pre_wattsPerFix INT,
    primary key (preFixID)
);


CREATE TABLE surveys(
	survey_id INT NOT NULL AUTO_INCREMENT,
  ProjectProjectId INT NOT NULL,
  PrefixturePreFixID VARCHAR(50),
  FloorFloorId INT,
  floor_number VARCHAR(50),
  room VARCHAR(255) NOT NULL,
  quantity INT NOT NULL,
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (survey_id),
  FOREIGN KEY (ProjectProjectId) REFERENCES projects(project_id) ON DELETE CASCADE,
  FOREIGN KEY (PrefixturePreFixID) REFERENCES PreFixtures(preFixID) ON DELETE CASCADE,
  FOREIGN KEY (FloorFloorId) REFERENCES floors(floor_id) ON DELETE CASCADE
);


