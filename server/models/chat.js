import sequelize from ('./index');
import { Datatypes, Message } from 'sequelize';

module.exports = sequelize.define('Chat', {
        Bot: {
            type: Datatypes.STRING,
            allowNull: false,
        }
    });
    Chat.hasMany(Message);
    Message.belongsTo(Chat);
