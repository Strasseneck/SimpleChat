import { sequelize } from './index.js';
import Datatypes  from 'sequelize';

const Message = sequelize.define('Message', {
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


const Chat = sequelize.define('Chat', {
    Bot: {
        type: Datatypes.STRING,
        allowNull: false,
    }
});
Chat.hasMany(Message);
Message.belongsTo(Chat);
  
export { Chat, Message };