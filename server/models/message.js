import sequelize from ('./index');
import { Datatypes } from 'sequelize';

module.exports = sequelize.define('Message', {
            user: {
                type: Datatypes.STRING,
                allowNull: false
            },
            content: {
                type: Datatypes.STRING,
                allowNull: false
            },
            tag: {
                type: Datatypes.STRING,
                allowNull: false
            }
    });