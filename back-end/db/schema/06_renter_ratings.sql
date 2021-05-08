DROP TABLE IF EXISTS renter_ratings CASCADE;
CREATE TABLE renter_ratings (
  id SERIAL PRIMARY KEY NOT NULL,
  owner_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  renter_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  rating INTEGER NOT NULL
);


-- need to confirm if this will work