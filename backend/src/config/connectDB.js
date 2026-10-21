require('dotenv').config();

const { Sequelize } = require('sequelize');
const config = require('./config'); 

const env = process.env.NODE_ENV || 'development';

const dbConfig = config[env];

const sequelize = new Sequelize(
    dbConfig.database, 
    dbConfig.username, 
    dbConfig.password, 
    dbConfig 
);

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log(`Connection to database has been established successfully in [${env.toUpperCase()}] mode.`);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = connectDB;