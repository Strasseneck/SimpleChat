import { Sequelize } from 'sequelize';
import {  password } from './password.js'

const sequelize = new Sequelize ('simplechat', 'strasseneck', `pandemonium`, {
    host: '127.0.0.1',
    dialect: 'postgres',
})

export { sequelize };