import { sequelize } from './index.js';
import Datatypes  from 'sequelize';
import { Message } from './message.js';

const Chat = sequelize.define('Chat', {
        name: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true
        }
    });
    Chat.hasMany(Message);
    Message.belongsTo(Chat);

export { Chat }