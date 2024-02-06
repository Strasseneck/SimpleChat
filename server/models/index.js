import { Sequelize } from 'sequelize';
import {  password } from './password.js'

const sequelize = new Sequelize ('simplechat', 'strasseneck', password, {
    host: '127.0.0.1',
    dialect: 'postgres',
    logging: (...msg) => console.log(msg)
})

export { sequelize };