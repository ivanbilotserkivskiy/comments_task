import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

type DBConfig = {
  DB_NAME: string,
  DB_PASSWORD: string,
  DB_USER: string,
  DB_HOST: string,
};

const { DB_NAME, DB_PASSWORD, DB_USER, DB_HOST } = process.env as DBConfig;


export const sequelize = new Sequelize(
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  {
    host: DB_HOST,
    dialect: 'mysql',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);


export const connection = async() => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);

}
}