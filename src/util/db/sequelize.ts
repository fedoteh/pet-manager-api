import { Sequelize } from 'sequelize';

const baseOptions = {
  host: process.env.DB_HOST as string,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  dialect: 'postgres',
  logging: false,
};

const localOptions = process.env.NODE_ENV === 'local' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // You might want to set this to true in production
    },
  },
} : {};

const sequelizeOptions = {
  ...baseOptions,
  ...localOptions,
};

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  sequelizeOptions as any,
);

export default sequelize;