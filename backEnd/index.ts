import * as dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import { Sequelize } from 'sequelize';

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.use(morgan('dev'));

const port = process.env.PORT || 3333;

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error('DATABASE_URL is not defined in the environment variables');
}

const sequelizeInstance = new Sequelize(databaseUrl);

sequelizeInstance
  .authenticate()
  .then(() => {
    console.log('Connection established with the database');
  })
  .catch((err: any) => {
    console.error('Failed to connect to database:', err);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});