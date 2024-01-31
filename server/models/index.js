import { Sequelize } from 'sequelize';

const sequelize = new Sequelize ('simplechatdb', 'postgres', `${password}`, {
    host: '127.0.0.1',
    dialect: 'postgres'
})

module.exports = sequelize;