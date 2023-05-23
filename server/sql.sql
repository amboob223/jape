CREATE DATABASE jape;
CREATE TABLE travelers(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    phone VARCHAR(255),
    email VARCHAR(255),
    origin VARCHAR(255),
    destination VARCHAR(255),
    pic BYTEA
);

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    phone VARCHAR(255),
    email VARCHAR(255),
    origin VARCHAR(255),
    destination VARCHAR(255),
    pic BYTEA
);

