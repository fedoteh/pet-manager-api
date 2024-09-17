-- Insert initial data into dogs table
INSERT INTO dogs (id, name, lastname, sex, breed, color, weight)
VALUES 
(1, 'Leia', 'Organa', 'female', 'Golden Retriever', ARRAY['Golden'], 42),
(2, 'Totoño', 'Leopoldo', 'male', NULL, ARRAY['Light Yellow'], 10),
(3, 'Guauguaucito', 'Feroz', 'female', 'Jack Russel', ARRAY['White', 'Brown'], 15)
ON CONFLICT (id) DO NOTHING;

-- Insert initial data into cats table
INSERT INTO cats (id, name, lastname, sex, breed, color, weight)
VALUES 
(1, 'Sherlock', 'Holmes', 'male', 'American Shorthair', ARRAY['White', 'Orange'], 8.2),
(2, 'Irene', 'Adler', 'female', 'American Shorthair', ARRAY['Black'], 4.7),
(3, 'Mr. Mittens', 'Turbofreckles', 'male', 'Maine Coon', ARRAY['Gray'], 7.1)
ON CONFLICT (id) DO NOTHING;