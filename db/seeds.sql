USE energylogan_db;

INSERT INTO projects
  (project_name, customer, address, contact_name, contact_number, account_number, number_of_floors, other, scheduled_date)
VALUES 
  ("161 Newkirk", "Rutgers", "161 Newkirk, Jersey City, NJ", "John Doe", "2015555555", "101000123", "15", "Basement", "2017-06-01"), 
  ("101 Easy Street", "Wall Street Inc.", "101 Easy Street, NY", "Jack Moneybags", "2127777777", "201000777", "25", "N/A", "2017-07-11"),
  ("Cruise Plaza", "My Caribbean Cruises", "555 Carribean Way, Miami, FL", "Jack Sparrow", "8351234567", "107000333", "20", "Boiler Room", "2017-06-29"); 

  INSERT INTO surveys
  (project_id, floor_number, room, fixture_id, quantity)
VALUES 
	(1, 1, "Hallway", 12345, 200),
	(1, 1, "Room 1", 22222, 4),
	(1, 2, "Room 1", 22222, 10),
	(1, 3, "Hallway", 12345, 200),
	(1, 3, "Bathroom", 23654, 30),
	(1, 4, "Hallway", 12345, 50),
	(1, 4, "Room 1", 02555, 10),
	(1, 4, "Room 2", 12456, 55),
	(1, 4, "Room 3", 44444, 150)
	(2, 1, "Lobby", 25566, 300),
	(2, 2, "Room 1", 22222, 4),
	(2, 2, "Room 2", 33333, 10),
	(2, 3, "Hallway", 12345, 200)
	(3, 1, "Lobby", 12345, 20),
	(3, 1, "Bathroom", 23422, 4),
	(3, 2, "Room 1", 22222, 10),
	(3, 3, "Hallway", 12345, 200),
	(3, 3, "Bathroom", 23654, 30),
	(3, 4, "Hallway", 12345, 50),
	(3, 4, "Room 1", 02555, 10),
	(3, 4, "Room 2", 12456, 55),
	(3, 4, "Room 3", 44444, 150);


	INSERT INTO prefixtures
  (preFixID, pre_lampCode, pre_type, pre_desccription, pre_ballast, pre_lampNum, pre_watts, pre_wattsPerFix)

  VALUES 
	("CF10/2D", "CFD10W", "CFL", "Compact Fluorescent, 2D, (1) 10W lamp","Mag-STD", 1, 10, 16),
	("ECF5/1", "CFT5W", "EXIT", "EXIT Compact Fluorescent, (1) 5W lamp, 2D, (1) 10W lamp","Mag-STD", 1, 5, 9),
	("H72/1", "H72", "HAL", "Halogen Incandescent, (1) 72W lamp","HAL-STD", 1, 72, 72);
	