DROP TABLE characters;

CREATE TABLE characters (
    id SERIAL8 PRIMARY KEY,
    name VARCHAR (255),
    darkside BOOLEAN,
    age INT
);

INSERT INTO characters (name, darkside, age) VALUES ('Obi-Wan', false, 27);
INSERT INTO characters (name, darkside, age) VALUES ('Anakin', false, 19);
INSERT INTO characters (name, darkside, age) VALUES ('Darth Maul', true, 32);
INSERT INTO characters (name, darkside, age) VALUES ('Yoda', false, 40000);



SELECT * FROM characters;


UPDATE characters SET darkside = true WHERE NAME = 'Anakin';
SELECT * FROM characters;