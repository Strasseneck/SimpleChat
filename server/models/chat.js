import { sequelize } from './index.js';
import {Datatypes, Message }  from 'sequelize';

const Chat = sequelize.define('Chat', {
        Bot: {
            type: Datatypes.STRING,
            allowNull: false,
        }
    });
    Chat.hasMany(Message);
    Message.belongsTo(Chat);
    
export { Chat }