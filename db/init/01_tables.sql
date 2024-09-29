CREATE TABLE IF NOT EXISTS species (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    description VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_species_updated_at
BEFORE UPDATE ON species
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TABLE IF NOT EXISTS pets (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  species_id INT REFERENCES species(id) NOT NULL,  -- Foreign key referencing species table
  sex VARCHAR(6) CHECK (sex IN ('m', 'f')) NOT NULL,
  breed VARCHAR(255),
  color VARCHAR(255)[] NOT NULL,
  weight FLOAT,
  profile_picture VARCHAR(255),
  activities VARCHAR(255)[],
  favorite_snack VARCHAR(255),
  favorite_toy VARCHAR(255),
  favorite_place VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TRIGGER update_pets_updated_at
BEFORE UPDATE ON pets
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- We create the indexes to improve performance on queries for specific pets
CREATE INDEX IF NOT EXISTS pets_dogs ON pets (species_id) WHERE species_id = 1;
CREATE INDEX IF NOT EXISTS pets_cats ON pets (species_id) WHERE species_id = 2;