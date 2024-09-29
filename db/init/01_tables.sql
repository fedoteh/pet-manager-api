CREATE TABLE IF NOT EXISTS species (
  id SERIAL PRIMARY KEY,
  name varchar(20),
  description varchar(255)
);

CREATE TABLE IF NOT EXISTS pets (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  species_id INT REFERENCES species(id) NOT NULL,  -- Foreign key referencing species table
  sex VARCHAR(6) CHECK (sex IN ('male', 'female')) NOT NULL,
  breed VARCHAR(255),
  color VARCHAR(255)[] NOT NULL,
  weight FLOAT,
  profilePicture VARCHAR(255),
  activities VARCHAR(255)[],
  favoriteSnack VARCHAR(255),
  favoriteToy VARCHAR(255),
  favoritePlace VARCHAR(255)
);

-- We create the indexes to improve performance on queries for specific pets
CREATE INDEX IF NOT EXISTS pets_dogs ON pets (species_id) WHERE species_id = 1;
CREATE INDEX IF NOT EXISTS pets_cats ON pets (species_id) WHERE species_id = 2;