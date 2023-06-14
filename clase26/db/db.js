import { Sequelize } from 'sequelize';

const db = new Sequelize('db_cac_23307', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306'
});

export default db;
