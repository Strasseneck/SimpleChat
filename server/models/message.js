module.exports = (sequelize, Datatypes) => {
    Message = sequelize.define('Message', {
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
    
    Message.associate = models => {
        Message.belongsTo(models.Chat, {
            foreignKey: {
                allowNull: false
            },
            onDelete: "cascade"
        });
    };
    
    return Message;
}