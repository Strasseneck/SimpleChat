import sequelize from ('./index')
import { Datatypes, Message } from 'sequelize';

module.exports = sequelize.define('Chat', {
    Bot: {
        type: Datatypes.STRING,
        allowNull: false,
    }
});

sequelize.Chat.hasMany(Message);