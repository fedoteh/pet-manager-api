-- Insert the species our app manages
INSERT INTO species (id, name, description) VALUES
(1, 'Dog', 'Canis lupus familiaris'),
(2, 'Cat', 'Felis catus');

-- Insert initial data for dogs
INSERT INTO pets (id, name, lastname, species_id, sex, breed, color, weight)
VALUES 
(1, 'Leia', 'Organa', 1, 'f', 'Golden Retriever', ARRAY['Golden'], 42),
(2, 'Totoño', 'Leopoldo', 1, 'm', NULL, ARRAY['Light Yellow'], 10),
(3, 'Guauguaucito', 'Feroz', 1, 'm', 'Jack Russel', ARRAY['White', 'Brown'], 15)
ON CONFLICT (id) DO NOTHING;

-- Insert initial data for cats
INSERT INTO pets (id, name, lastname, species_id, sex, breed, color, weight)
VALUES 
(4, 'Sherlock', 'Holmes', 2, 'm', 'American Shorthair', ARRAY['White', 'Orange'], 8.2),
(5, 'Irene', 'Adler', 2, 'f', 'American Shorthair', ARRAY['Black'], 4.7),
(6, 'Mr. Mittens', 'Turbofreckles', 2, 'm', 'Maine Coon', ARRAY['Gray'], 7.1)
ON CONFLICT (id) DO NOTHING;