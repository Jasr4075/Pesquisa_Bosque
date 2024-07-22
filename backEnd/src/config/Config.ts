import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize({
    database: process.env.DB_NAME || 'pesquisa_bosque',
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '11725182',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    dialect: 'postgres',
    logging: console.log, // Imprime las consultas SQL en la consola
    dialectOptions: {
      debug: true, // Opcional, puede proporcionar más detalles en el debug
    },
});

export default sequelize;
