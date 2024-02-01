import { sequelize } from './index.js';
import {Datatypes }  from 'sequelize';
import { Message } from './message.js';

const Chat = sequelize.define('Chat', {
        Bot: {
            type: Datatypes.STRING,
            allowNull: false,
        }
    });
    Chat.hasMany(Message);
    Message.belongsTo(Chat);
  
export { Chat }