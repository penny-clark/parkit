DROP TABLE IF EXISTS spot_ratings CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  avatar VARCHAR(255) DEFAULT 'https://pr.sssagent.com/img/a1.png'
);