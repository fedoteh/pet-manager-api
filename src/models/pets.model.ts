import sequelize from '@util/db/sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import Species from './species.model';

// Define the attributes for the Pet model
interface PetAttributes {
    id: number;
    name: string;
    lastname: string;
    species_id: number;
    sex: 'm' | 'f';
    breed?: string;
    color: string[];
    weight?: number;
    profile_picture?: string;
    activities?: string[];
    favorite_snack?: string;
    favorite_toy?: string;
    favorite_place?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

// Define the creation attributes for the Pet model
interface PetCreationAttributes extends Optional<PetAttributes, 'id'> { }

// Define the Pet model
class Pet extends Model<PetAttributes, PetCreationAttributes> {
    // Static method to fetch all dogs
    public static async findAllDogs(): Promise<Pet[]> {
        return await Pet.findAll({ where: { species_id: 1 } });
    }

    // Static method to fetch all cats
    public static async findAllCats(): Promise<Pet[]> {
        return await Pet.findAll({ where: { species_id: 2 } });
    }
}

// Initialize the Pet model
Pet.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        species_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Species,
                key: 'id',
            },
            allowNull: false,
        },
        sex: {
            type: DataTypes.STRING(6),
            allowNull: false,
            validate: {
                isIn: [['m', 'f']],
            },
        },
        breed: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        color: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        weight: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        profile_picture: {
            type: DataTypes.STRING(255),
            allowNull: true,
            field: 'profile_picture', // Maps to the snake_case column in the DB
        },
        activities: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
        },
        favorite_snack: {
            type: DataTypes.STRING(255),
            allowNull: true,
            field: 'favorite_snack', // Maps to the snake_case column in the DB
        },
        favorite_toy: {
            type: DataTypes.STRING(255),
            allowNull: true,
            field: 'favorite_toy', // Maps to the snake_case column in the DB
        },
        favorite_place: {
            type: DataTypes.STRING(255),
            allowNull: true,
            field: 'favorite_place', // Maps to the snake_case column in the DB
        },
    },
    {
        sequelize,
        tableName: 'pets',
        timestamps: true, // Enable timestamps (createdAt, updatedAt)
        underscored: true, // This ensures createdAt is mapped to created_at
    }
);

// Define the association with the Species model
Pet.belongsTo(Species, { foreignKey: 'species_id' });

export default Pet;