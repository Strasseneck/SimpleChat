import { sequelize } from './index.js';
import Datatypes  from 'sequelize';

const Message = sequelize.define('Message', {
            author: {
                type: Datatypes.STRING,
                allowNull: false
            },
            content: {
                type: Datatypes.STRING,
                allowNull: false
            },
            timestamp: {
                type: Datatypes.STRING,
                allowNull: false
            }
    });
  
export { Message };