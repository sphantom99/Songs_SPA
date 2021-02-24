DROP TABLE cds;
CREATE TABLE cds (
	ID SERIAL PRIMARY KEY,
	name VARCHAR(30),
	band VARCHAR(30),
	length DECIMAL(4,2),
	genre VARCHAR(30)
);

	INSERT INTO cds (name,band,length,genre) VALUES ('Let You Down','NF',3.24,'Rap'),
		('Love In The Dark','Jessey Reyes',3.00,'Slow'),
		('The Wall','Patrick Reza',1.52,'Slow'),
		('Used to the Darkness','Rocs',4.00,'Rock'),
		('Rare','Selena Gomez',3.22,'Pop');