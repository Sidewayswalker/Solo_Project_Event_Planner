-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!


-- USER INFO TABLE
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "email" VARCHAR (100),
    "password" VARCHAR (100) NOT NULL
);
--INSERT INTO "user"
--("username", "email", "password")
--VALUES
--('Steven', 'steven@gmail.com', 'Steven'),
--('Bob The Builder', 'Bob@outlook.com', 'Yes We Can');


-- EVENT INFO TABLE 
CREATE TABLE "event" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER,
    "event_name" VARCHAR (50),
    "date" DATE NOT NULL,
    "location" VARCHAR (100),
    "start_time" TIME (100) NOT NULL
);
INSERT INTO "event"
("user_id", "event_name", "date", "location", "start_time")
VALUES
('1', 'Volleyball', '2024-05-25', 'Bde Maka Ska', '08:00:00'),
('1','Networking Event', '2024-09-05', 'Lobby Area', '17:30:00'),
('2','Interview w/ NASA', '2024-08-10', 'Space Station Alpha', '10:00:00');


-- GUEST DATA TABLE
CREATE TABLE "guest" (
    "id" SERIAL PRIMARY KEY,
    "event_id" INTEGER,
    "guest_name" VARCHAR (75),
    "phone_number" VARCHAR (50),
    "response" BOOLEAN DEFAULT FALSE,
    "invite_UUID" VARCHAR (200) NOT NULL
);
INSERT INTO "guest"
("event_id","guest_name","phone_number","response","invite_UUID")
VALUES
('1','Tom', '952-555-8899', TRUE, 'fdiopreqwrajklfdsa1321jkflads'),
('1','Danny', '952-332-5482', TRUE, 'fdioprfqerqwdcvxzvcxznriods'),
('1','Jared', '952-221-1132', FALSE, 'fdioprfqekjkljkljlks3243iods'),
('1','Dalton', '952-667-8992', TRUE, 'fdioprfqerqwdcvxzvcxznriods');