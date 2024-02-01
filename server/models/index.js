import { Sequelize } from 'sequelize';
import {  password } from './password.js'
import fs from 'fs-extra';

const sequelize = new Sequelize ('simplechatdb', 'postgres', `${password}`, {
    host: '127.0.0.1',
    dialect: 'postgres'
})

const db = {};
const models = './'





export { sequelize };