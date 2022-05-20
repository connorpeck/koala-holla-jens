CREATE TABLE koalas (
"id" serial PRIMARY KEY,
"name" VARCHAR (16),
"age" int,
"gender" VARCHAR (1),
"ready_for_transfer" BOOLEAN,
"notes" VARCHAR (200)
);



-- crud tests


-- table info
INSERT INTO koalas (name, age, gender, ready_for_transfer , notes) VALUES('Scotty', '4', 'M', TRUE, 'Born in Guatemala');
INSERT INTO koalas (name, age, gender, ready_for_transfer , notes) VALUES('Jean', '5', 'F', TRUE, 'Allergic to lots of lava');
INSERT INTO koalas (name, age, gender, ready_for_transfer , notes) VALUES('Ororo', '7', 'F', FALSE, 'Loves listening to Paula (Abdul)');
INSERT INTO koalas (name, age, gender, ready_for_transfer , notes) VALUES('Logan', '15', 'M', FALSE, 'Loves the sauna');
INSERT INTO koalas (name, age, gender, ready_for_transfer , notes) VALUES('Charlie', '9', 'M', TRUE, 'Favorite band is Nirvana');
INSERT INTO koalas (name, age, gender, ready_for_transfer , notes) VALUES('Betsy', '4', 'F', TRUE, 'Has a pet iguana');



SELECT * FROM koalas;
UPDATE koalas SET ready_for_transfer = TRUE WHERE id=1;
DELETE FROM koalas WHERE id= 1;
