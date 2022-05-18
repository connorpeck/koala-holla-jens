CREATE TABLE koalas (
"id" serial PRIMARY KEY,
"name" VARCHAR (16),
"age" int,
"gender" VARCHAR (1),
"ready_for_transfer" BOOLEAN,
"notes" VARCHAR (200),
);




INSERT INTO koalas (name, age, gender, ready_for_transfer , notes) VALUES('Hal', '86', 'M', TRUE, 'Angry, stinky');

INSERT INTO koalas (name, age, gender, ready_for_transfer , notes) VALUES('Con', '33', 'M', TRUE, 'good job');

INSERT INTO koalas (name, age, gender, ready_for_transfer , notes) VALUES('Benji', '40', 'M', TRUE, 'best boy');

SELECT * FROM koalas;

DELETE FROM koalas WHERE id= 1;
