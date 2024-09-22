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
  weight FLOAT NOT NULL,
  profilePicture VARCHAR(255),
  activities VARCHAR(255)[],
  favoriteSnack VARCHAR(255),
  favoriteToy VARCHAR(255),
  favoritePlace VARCHAR(255)
);
