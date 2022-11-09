DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title VARCHAR(40) NOT NULL,
    name VARCHAR(40) NOT NULL,
    content VARCHAR(100) NOT NULL
);
