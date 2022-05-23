CREATE DATABASE myflaskapp;
use myflaskapp;

CREATE TABLE books (
    id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title varchar(255) NOT NULL,
    description varchar(255) NOT NULL,
    author varchar(255) NOT NULL
);


INSERT INTO books VALUES(null, "La hojarasca", "Interesante", "Gabo"),
    (null, "El principito", "Brillante", "Antoine de Saint");