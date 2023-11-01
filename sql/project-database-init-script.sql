/*
 * Upon submission, this file should contain the SQL script to initialize your database.
 * It should contain all DROP TABLE and CREATE TABLE statments, and any INSERT statements
 * required.
 */

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id           INTEGER  PRIMARY KEY AUTOINCREMENT
                          UNIQUE
                          NOT NULL,
    username     TEXT (5) UNIQUE
                          NOT NULL,
    password     TEXT     NOT NULL,
    avatar       TEXT,
    first_name   TEXT (1) NOT NULL,
    middle_name  TEXT,
    last_name    TEXT     NOT NULL,
    description  TEXT     NOT NULL,
    birth_date   INTEGER  NOT NULL,
    token        TEXT,
    date_updated NUMERIC  NOT NULL,
    date_created NUMERIC  NOT NULL
);

/**
    default password: 112233
*/
INSERT INTO users
    (username,
    password,
    first_name,
    last_name,
    description,
    birth_date,
    date_created,
    date_updated) VALUES
    ('admin', 'e0bc60c82713f64ef8a57c0c40d02ce24fd0141d5cc3086259c19b1e62a62bea', 'May', 'Liagon', 'test', 631123200000, 1698827297407, 1698827297407);