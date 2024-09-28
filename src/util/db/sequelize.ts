import { Sequelize } from 'sequelize';


const sequelize = new Sequelize(
  process.env.DB_NAME as string,       
  process.env.DB_USER as string,       
  process.env.DB_PASSWORD as string,   
  {
    host: process.env.DB_HOST as string,   
    port: parseInt(process.env.DB_PORT || '5432', 10), 
    dialect: 'postgres',               
    logging: false,                    
  }
);


export default sequelize;