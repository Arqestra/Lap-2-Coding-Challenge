DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    content VARCHAR(1000) NOT NULL
);
