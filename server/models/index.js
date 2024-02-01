import { Sequelize } from 'sequelize';
import {  password } from './password.js'

const sequelize = new Sequelize ('simplechatdb', 'postgres', `${password}`, {
    host: '127.0.0.1',
    dialect: 'postgres'
})

export { sequelize };