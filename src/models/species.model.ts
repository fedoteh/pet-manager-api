import sequelize from '@util/db/sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

// Define the attributes for the Species model
interface SpeciesAttributes {
    id: number;
    name: string;
    description: string;
}

// Define the creation attributes for the Species model
interface SpeciesCreationAttributes extends Optional<SpeciesAttributes, 'id'> { }

// Define the Species class extending the Sequelize Model class
class Species extends Model<SpeciesAttributes, SpeciesCreationAttributes> {
    public id!: number;
    public name!: string;
    public description!: string;

    // No need to declare createdAt and updatedAt fields
}

// Initialize the Species model
Species.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    },
    {
        sequelize, // Your Sequelize instance
        modelName: 'Species',
        tableName: 'species', // Optional: specify the table name
        timestamps: true, // Enable timestamps (createdAt, updatedAt)
    }
);

export default Species;
