import { sequelize } from './index.js';
import Datatypes   from 'sequelize';
import { Message } from './message.js';

const User = sequelize.define('User', {
        name: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true
        }
    });
    User.hasMany(Message);
    Message.belongsTo(User);
  
export { User }