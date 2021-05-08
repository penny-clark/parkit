DROP TABLE IF EXISTS quizzes CASCADE;
CREATE TABLE spots (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  street_address VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  picture VARCHAR(255) DEFAULT 'https://pr.sssagent.com/img/parkingspot1.png',
  price INTEGER NOT NULL
);