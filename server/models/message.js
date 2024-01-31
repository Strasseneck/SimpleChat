import sequelize from ('./index')
import { Datatypes, Chat } from 'sequelize';

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

sequelize.Message.belongsTo(Chat);